"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const home_1 = __importDefault(require("./routes/home"));
dotenv_1.default.config();
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use(home_1.default);
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
exports.default = server;
//# sourceMappingURL=index.js.map