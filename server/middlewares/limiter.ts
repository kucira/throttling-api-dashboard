import { Request, Response, NextFunction } from 'express';
import Limit from '../interfaces/Limit';

const limit = new Map<string, Limit>();

const getLimit = (IP: string): Limit => {
  return limit.get(IP);
};

const setLimit = (IP: string, value: Limit): void => {
  if (IP && IP !== '') limit.set(IP, value);
};

const deleteLimit = (IP): void => {
  limit.delete(IP);
};

const handleLimiter = (req: Request, res: Response, next: NextFunction) => {
  const REQUEST_LIMIT_MS: number = parseInt(process.env.API_LIMIT_MS, 10);
  const REQUEST_LIMIT = parseInt(process.env.API_REQUEST_LIMIT, 10);
  const MESSAGES = process.env.MESSAGE;

  const IP: string = req.header('x-forwarded-for') || req.socket.remoteAddress;
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
  setLimit(IP, { ...limit, request: limit.request });
  next();
};

export { getLimit, setLimit, deleteLimit, handleLimiter };
