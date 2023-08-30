settings = {

    serverType: process.env.SERVER_TYPE || "http",
    serverHost: process.env.SERVER_HOST || "localhost",
    serverPort: process.env.SERVER_PORT || 3000,

    globalErrorMessage: "Something went wrong, please try again later",

}

module.exports = settings