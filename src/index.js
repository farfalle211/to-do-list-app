import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function MyInfo() {
  return (
    <div>
      <h1>Mike Dessailly</h1>
      <p> From Princeton, NJ. Born in Paris. </p>
      <ul>
        <li>Reddit</li>
        <li>Facebook</li>
        <li>Google</li>
      </ul>
    </div>
  )
}

function MyApp() {
  return (
    <ul>
      <li> Learn Spanish </li>
      <li> Learn French </li>
      <li> Learn Mandarin </li>
    </ul>
  )
}

ReactDOM.render( <MyInfo />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

