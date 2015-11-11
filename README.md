# react-countdown-to-future-date

[![npm version](https://badge.fury.io/js/react-mouse-pointer-tools.svg)](https://badge.fury.io/js/react-mouse-pointer-tools)

react-countdown-to-future-date is a React component that counts down to a specific future date.

![gif](https://cloud.githubusercontent.com/assets/11833296/11092334/8549e41c-887a-11e5-9d71-0295ee1807c3.gif)

``` js
var React       = require('react');
var ReactDOM    = require('react-dom');
var countdown  = require('react-countdown-to-future-date');
var rootElement = document.body.getElementById("wrapper");

ReactDOM.render(
  <countdown givenDate = {"November, 17, 2015"}  afterUnmount = {this.afterUnmount}/>,
  rootElement
);
```

Please note: the date has to be written in the format: month, date, year

Link to the project on Github: https://github.com/naazy/react-countdown-to-future-date 
