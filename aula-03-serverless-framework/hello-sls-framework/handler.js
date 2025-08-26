"use strict";

module.exports.hello = async () => {
  console.log('Ja chegou o disco voador!!')
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Aaaaai simmmmmm",
      },
      null,
      2
    ),
  };
};
