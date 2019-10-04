
![Logo of the project](https://i.imgur.com/QHJ0orW.png)

# Olist Front-End code challenge
> This is a code challange provided by [Olist](http://olist.com/) for their Front-End candidates. It consists of a signup page with form validation including a password strength feature. More info on the challenge instructions [here](https://github.com/olist/work-at-olist-front/blob/master/README.md) 

## Installing / Getting started


Begin by cloning this repo and instaling dependencies
1. `git clone https://github.com/cfviotti/work-at-olist-front`
2. `cd work-at-olist-front`
3. `npm install`

Building it for production:
1. `npm run build`

## Developing
### Built With

- [Webpack Config Split]
- [Webpack Development Server]
- [HTML assets + minification]
- [SCSS to CSS + optimizations]
- [ES6 transpiling]
- [Browserslist]
- [Image assets + compression]
- [Font loading + preloading]
- [Asset compression (gzip)]
- [Clean Webpack Plugin]
- [Sourcemaps]
- [Offline-first + caching]
- [Progressive Web App (PWA)]

It uses Webpack to bundle and serve files through Webpack Dev Server The project is based on this [boilerplate](https://github.com/tr1s/tris-webpack-boilerplate) by @tr1s and slightly modified by me.

Code is based HTML5 (heavily making use of native form validation), JavaScript (ES6) and SASS

### Prerequisites
You will need [git](https://git-scm.com/) and [node.js](https://nodejs.org/) on your computer before running.


### Setting up Dev
```shell
npm start
```
This will run `webpack.common.js` and `webpack.dev.js` scripts, opening a page at [http://localhost:3000/](http://localhost:3000/) with live reloading functionality

### Building
```shell
npm run build
```
This will build our files inside a `dist` folder with optmizations for production  

## Style guide

I use [RCSS](https://rscss.io/index.html) as a SASS naming convention with a few adaptations based on preference, and [ABCSS](https://github.com/co-de-sign/abcss) for organizing the project file structure.

ABCSS was developed by some local friends of mine, under the Co-de-sign community, which host events and meetings (usually at the bar 🙃) with fellow Front-Enders here in Brasília - Brazil. It is heavily based on [SMACSS](http://smacss.com/) and [ITCSS](https://speakerdeck.com/dafed/managing-css-projects-with-itcss)

My basic adaption in RCSS, is to not worry so much with applying classes to all elements. I believe some of them are self-describable and can be styled under components with child rules. I also like to think everything is an element UNTIL it needs to be replicated, which then I decouple it from the original component creating another one. This approach proved really helpful for developing UIs fast, having other devs not fumbling too much with SASS code and trying to understand verbose naming like BEM, and most importantly, not worrying about over generalization until needed.  

## Work enviroment used
1. KDE Neon 5.16.5 based on Ubunto 18.04 LTS
2. An older 2012 Lenovo U410 with an Intel i7-3537U @ 2.00GHz, 8GB of RAM
3. Sublime Text 3 with Emmet, JavaScript Enhancements, CSScomb, and BracketHighlighter plugins used extensively

## Demo
This project is deployed through Netlify [here](https://nervous-banach-4136da.netlify.com/)

## Considerations
Originally the challenge orients to disable the submit form button until the form is valid, and enable it after validation. I realized that was not necessary since I'm using native HTML5 form validation through the Constraint Validation API, and it already avoids sending the form if it's not valid by checking `required` and `pattern` properties on elements. It keeps things much simpler without the need for complex custom JS validation methods. Hope this is all right :)