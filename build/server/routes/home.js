"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const limiter_1 = require("../middlewares/limiter");
const Home = express_1.default.Router();
Home.get('/', limiter_1.handleLimiter, (req, res) => res.send('Express + TypeScript Server'));
exports.default = Home;
//# sourceMappingURL=home.js.map