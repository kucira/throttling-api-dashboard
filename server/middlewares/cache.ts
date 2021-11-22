import { Request, Response, NextFunction } from 'express';
import Cache from '../interfaces/cache';

const cache = new Map<string, Cache>();

const getCache = (key: string): Cache => {
  return cache.get(key);
};

const setCache = (key: string, value: Cache): void => {
  cache.set(key, value);
};

const deleteCache = (key: string): void => {
  cache.delete(key);
};

const handleCache = (req: Request, res: Response, next: NextFunction) => {
  next();
};

export { getCache, setCache, handleCache, deleteCache };
