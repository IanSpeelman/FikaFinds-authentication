"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var port = 3001;
var app = (0, express_1.default)();
app.listen(port, function () { return console.log("Server is listening on port ".concat(port)); });
