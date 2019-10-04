require('offline-plugin/runtime').install();

// Importing markup
import '../index.html';

// Importing styles
import '../styles/app.scss';

// Importing our main scripts
import './validate-password.js';
import './validate-full-name.js';
import './validate-email.js';

// Utils scripts
import './utils/empty-inputs.js';
