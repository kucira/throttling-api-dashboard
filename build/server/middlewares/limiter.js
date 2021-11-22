"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleLimiter = exports.deleteLimit = exports.setLimit = exports.getLimit = void 0;
const limit = new Map();
const getLimit = (IP) => {
    return limit.get(IP);
};
exports.getLimit = getLimit;
const setLimit = (IP, value) => {
    if (IP && IP !== '')
        limit.set(IP, value);
};
exports.setLimit = setLimit;
const deleteLimit = (IP) => {
    limit.delete(IP);
};
exports.deleteLimit = deleteLimit;
const handleLimiter = (req, res, next) => {
    var _a;
    const IP = (_a = req.headers.forwarded) !== null && _a !== void 0 ? _a : req.socket.remoteAddress;
    console.log(IP, 'ip');
    getLimit(IP);
    // setLimit(IP, { request});
    next();
};
exports.handleLimiter = handleLimiter;
//# sourceMappingURL=limiter.js.map