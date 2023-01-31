'use strict';

module.exports.hello = async (event) => {
  console.log('This is a log. Hello log');
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hey again. How are u?! This is a modification =). Hello World. I will fight for my dreams',
        input: event,
      },
      null,
      2
    ),
  };
};
