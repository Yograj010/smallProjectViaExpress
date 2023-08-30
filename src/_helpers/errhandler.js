const config = require("./config");

function errHandlerMiddleware(err, req, res, next) {
  //   console.log("Error_Handler: ", err.message);

  return res.status(500).json({
    success: false,
    statusCode: 500,
    error: { message: config.globalErrorMessage, errorDetails: err.stack },
    result: {},
  });
}

module.exports = errHandlerMiddleware;
