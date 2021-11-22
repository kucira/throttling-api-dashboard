"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cache_1 = require("../cache");
describe('cache unit function', () => {
    const res = { date: Date.now(), message: 'success' };
    it('set cache data with key `home` as json data', () => {
        (0, cache_1.setCache)('home', res);
        const cache = (0, cache_1.getCache)('home');
        expect(cache).toBe(res);
    });
    it('get cache data with key home', () => {
        const cache = (0, cache_1.getCache)('home');
        expect(cache).toBe(res);
    });
    it('get empty cache data key home123 return empty', () => {
        const cache = (0, cache_1.getCache)('home123');
        expect(cache).toBeFalsy();
    });
    it('delete cache data key home', () => {
        (0, cache_1.deleteCache)('home');
        const cache = (0, cache_1.getCache)('home');
        expect(cache).toBeFalsy();
    });
});
//# sourceMappingURL=cache.js.map