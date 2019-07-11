import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { toast } from 'react-toastify';
import '../node_modules/react-toastify/dist/ReactToastify.css';

 toast.configure();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
