'use strict';

module.exports.hello = (event) => {
  console.log('This is a log. Hello log');
  setTimeout(() => {
    console.log("Delayed for 4 second.");
  }, 4000)
  return "Hello World"
};
