// const config = require('./config.json')

// module.exports = function () {
//   var greet = document.createElement('div')
//   greet.textContent = config.greetText
//   return greet
// }

import React, { Component } from 'react';
import config from './config.json';
import styles from './Greeter.scss';
class Greeter extends Component{
  render() {
    return (
      <div className={styles.app}>
        <p>{config.greetText}</p>
      </div>
    )
  }
}
export default Greeter
