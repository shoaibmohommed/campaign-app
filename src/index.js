import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { toast } from 'react-toastify';
 // Call it once in your app. At the root of your app is the best place
 toast.configure()

ReactDOM.render(<App />, document.getElementById('root'));

