"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Home = express_1.default.Router();
Home.get('/', (req, res) => res.status(200).json({
    message: 'Success',
}));
Home.get('/init', (req, res) => res.status(200).json({
    data: [
        {
            id: '123445',
            date: new Date().toISOString(),
        },
    ],
    message: 'Success',
}));
Home.get('/users', (req, res) => res.status(200).json({
    data: [
        {
            id: '123445',
            name: 'Joko',
            address: 'Kalimantan',
        },
    ],
    message: 'Success',
}));
exports.default = Home;
//# sourceMappingURL=home.js.map