require('offline-plugin/runtime').install();

// Importing markup
import '../index.html';

// Importing styles
import '../styles/app.scss';

// Importing our main scripts
import './validate-password.js';
import './fake-submit.js';

// Utils scripts
import './utils/empty-inputs.js';
