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
    const REQUEST_LIMIT_MS = parseInt(process.env.API_LIMIT_MS, 10);
    const REQUEST_LIMIT = parseInt(process.env.API_REQUEST_LIMIT, 10);
    const MESSAGES = process.env.MESSAGE;
    const IP = req.header('x-forwarded-for') || req.socket.remoteAddress;
    const limit = getLimit(IP);
    //no limit data for current IP
    if (!limit) {
        setLimit(IP, { request: 1, ttl: Date.now() + REQUEST_LIMIT_MS });
        return next();
    }
    // limit data exist for ip & limit ttl already pass request limit time
    // means new limit data
    if (limit && limit.ttl < Date.now()) {
        setLimit(IP, { request: 1, ttl: Date.now() + REQUEST_LIMIT_MS });
        return next();
    }
    if (limit.request >= REQUEST_LIMIT) {
        return res.status(429).json({
            error: MESSAGES,
        });
    }
    // add request counter, set the limit
    // and next task
    limit.request = limit.request + 1;
    setLimit(IP, Object.assign(Object.assign({}, limit), { request: limit.request }));
    next();
};
exports.handleLimiter = handleLimiter;
//# sourceMappingURL=limiter.js.map