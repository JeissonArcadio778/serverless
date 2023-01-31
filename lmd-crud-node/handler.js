"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello World From Serverless FrameWork",
        input: event,
      },
      null,
      2
    ),
  };
};
