const path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const TerserPlugin = require('terser-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const CompressionPlugin = require('compression-webpack-plugin');

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

module.exports = merge(common, {
  mode: process.env.NODE_ENV,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: __dirname + '/postcss.config.js',
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true,
        sourceMap: true
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[contentHash].css',
      chunkFilename: '[id].css'
    }),
    new CompressionPlugin({
      test: /\.(html|css|js)(\?.*)?$/i // only compressed html/css/js, skips compressing sourcemaps etc
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      gifsicle: {
        // lossless gif compressor
        optimizationLevel: 9
      },
      pngquant: {
        // lossy png compressor, remove for default lossless
        quality: '85'
      },
      plugins: [
        imageminMozjpeg({
          // lossy jpg compressor, remove for default lossless
          quality: '85'
        })
      ]
    }),
    new FaviconsWebpackPlugin({
      logo: './src/images/favicon.svg',
      cache: true,
      icons: {
        twitter: true,
        windows: true
      },
      prefix: 'favicons',
      outputPath: 'images/favicons',
      publicPath: 'images/'
    }),
    new OfflinePlugin()
  ],
  output: {
    filename: '[name].[contentHash].js',
    path: path.resolve(__dirname, 'dist'),
  }
});
