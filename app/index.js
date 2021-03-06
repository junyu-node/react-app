import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory  } from 'react-router';
import routes from './routes/index.jsx';

let root = document.getElementById('app');
ReactDOM.render(
<Router
    routes={routes}
    history={browserHistory}
    />, root
);