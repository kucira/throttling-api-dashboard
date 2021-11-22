"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const limiter_1 = require("../limiter");
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../../index"));
describe('limiter unit function', () => {
    const IP = '192.168.0.1;';
    const value = { request: 1, ttl: Date.now() };
    it('set limiter data with ip address', () => {
        (0, limiter_1.setLimit)(IP, value);
        const limit = (0, limiter_1.getLimit)(IP);
        expect(limit).toBe(value);
    });
    it('get limit data with ip', () => {
        const cache = (0, limiter_1.getLimit)(IP);
        expect(cache).toBe(value);
    });
    it('get empty cache data ip 192.168.0.2 return empty', () => {
        const cache = (0, limiter_1.getLimit)('192.168.0.2');
        expect(cache).toBeFalsy();
    });
    it('delete limit ip 192.168.0.1', () => {
        (0, limiter_1.deleteLimit)(IP);
        const cache = (0, limiter_1.getLimit)(IP);
        expect(cache).toBeFalsy();
    });
    it('handle limit when request should return endpoint /', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.default).get('/');
        console.log(res);
        expect(res.statusCode).toEqual(200);
    }));
});
//# sourceMappingURL=limiter.js.map