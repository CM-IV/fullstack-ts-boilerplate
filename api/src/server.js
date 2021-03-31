"use strict";
exports.__esModule = true;
var express_1 = require("express");
var http = require("http");
var winston = require("winston");
var expressWinston = require("express-winston");
var cors_1 = require("cors");
var users_routes_config_1 = require("../users/users.routes.config");
var debug_1 = require("debug");
var helmet_1 = require("helmet");
var dotenv = require("dotenv");
dotenv.config();
var PORT = parseInt(process.env.PORT, 10);
var app = express_1["default"]();
var server = http.createServer(app);
var routes = [];
var debugLog = debug_1["default"]('app');
// here we are adding middleware to parse all incoming requests as JSON 
app.use(express_1["default"].json());
// here we are adding middleware to allow cross-origin requests
app.use(cors_1["default"]());
app.use(helmet_1["default"]());
// here we are preparing the expressWinston logging middleware configuration,
// which will automatically log all HTTP requests handled by Express.js
var loggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize({ all: true }))
};
// here we are crashing on unhandled errors and spitting out a stack trace,
// but only when in debug mode
if (process.env.DEBUG || !process.env.PORT) {
    process.on('unhandledRejection', function (reason) {
        debugLog('Unhandled Rejection:', reason);
        process.exit(1);
    });
}
else {
    loggerOptions.meta = false; // when not debugging, make terse
}
// initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions));
// here we are adding the UserRoutes to our array,
// after sending the Express.js application object to have the routes added to our app!
routes.push(new users_routes_config_1.UsersRoutes(app));
// this is a simple route to make sure everything is working properly
app.get('/', function (req, res) {
    res.status(200).send("Server up and running!");
});
server.listen(PORT, function () {
    debugLog("Server running at http://localhost:" + PORT);
    routes.forEach(function (route) {
        debugLog("Routes configured for " + route.getName());
    });
});
