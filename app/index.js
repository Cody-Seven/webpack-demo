// const greet = require('./Greeter')
// document.querySelector('#app').appendChild(greet())
import React from 'react';
import { render } from 'react-dom';
import Greeter from './Greeter';
import './index.scss';

render(<Greeter/>, document.getElementById('app'));