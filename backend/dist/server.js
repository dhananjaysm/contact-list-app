"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var port = process.env.PORT || 3000;
var app = (0, express_1.default)();
app.use(express_1.default.static(__dirname + "/public"));
app.get("/", function (req, res) {
    res.send("hello");
});
app.listen(port, function () {
    console.log("server listening at ".concat(port));
});
