"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCache = exports.handleCache = exports.setCache = exports.getCache = void 0;
const cache = new Map();
const getCache = (key) => {
    return cache.get(key);
};
exports.getCache = getCache;
const setCache = (key, value) => {
    cache.set(key, value);
};
exports.setCache = setCache;
const deleteCache = (key) => {
    cache.delete(key);
};
exports.deleteCache = deleteCache;
const handleCache = (req, res, next) => {
    next();
};
exports.handleCache = handleCache;
//# sourceMappingURL=cache.js.map