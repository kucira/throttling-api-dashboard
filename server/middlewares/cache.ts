import { Request, Response, NextFunction } from 'express';
import CacheResponse from '../interfaces/response';

const cache = new Map<string, CacheResponse>();

const getCache = (key: string): CacheResponse => {
  return cache.get(key);
};

const setCache = (key: string, value: CacheResponse): void => {
  cache.set(key, value);
};

const deleteCache = (key: string): void => {
  cache.delete(key);
};

const handleCache = (req: Request, res: Response, next: NextFunction) => {
  next();
};

export { getCache, setCache, handleCache, deleteCache };
