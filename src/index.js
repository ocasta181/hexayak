import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {PlayerProvider} from './PlayerContext'

ReactDOM.render(<PlayerProvider><App /></PlayerProvider>, document.getElementById('root'));


serviceWorker.unregister();
