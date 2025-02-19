import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  fas,
  faGraduationCap,
  faCalendarAlt,
  faUniversity,
  faCertificate,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Add Font Awesome icons to library
library.add(
  fab,
  fas,
  faGraduationCap,
  faCalendarAlt,
  faUniversity,
  faCertificate,
  faExternalLinkAlt
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);