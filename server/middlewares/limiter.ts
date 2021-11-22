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
  const IP: string = req.header('x-forwarded-for') || req.socket.remoteAddress;
  getLimit(IP);
  // setLimit(IP, { request});
  next();
};

export { getLimit, setLimit, deleteLimit, handleLimiter };
