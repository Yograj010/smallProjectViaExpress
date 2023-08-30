require("dotenv").config();
const config = require("./_helpers/config");
const errorHandler = require("./_helpers/errhandler");

const path = require('path');
const express = require('express')
const tempEngine = require('express-handlebars');

const app = express()

app.engine('handlebars', tempEngine.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// app.use(express.static(path.join(__dirname, 'assets')))
app.use('/',require(path.join(__dirname,'./routes/routes.js')))

const port = config.serverPort
const host = config.serverHost
const serverType = config.serverType

app.listen(port, host, () => {
  console.log(`Example app listening at ${serverType}://${host}:${port}`)
})

/*-----Always place this line in the end-----*/
//This will handle any error which may occure in the middleware, if used.  
app.use(errorHandler);
