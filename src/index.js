import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import './pages/Login/login.css'
import Home from './pages/Home/index';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
