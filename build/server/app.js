"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const home_1 = __importDefault(require("./routes/home"));
const limiter_1 = require("./middlewares/limiter");
// import { handleCache } from './middlewares/cache';
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('combined'));
app.use(express_1.default.json());
app.use(limiter_1.handleLimiter);
// app.use(handleCache);
app.use(home_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map