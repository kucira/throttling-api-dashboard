import { getCache, deleteCache, setCache } from '../cache';
import CacheResponse from '../../interfaces/response';

describe('cache unit function', () => {
  const res: CacheResponse = { date: Date.now(), message: 'success' };
  it('set cache data with key `home` as json data', () => {
    setCache('home', res);
    const cache = getCache('home');
    expect(cache).toBe(res);
  });

  it('get cache data with key home', () => {
    const cache = getCache('home');
    expect(cache).toBe(res);
  });

  it('get empty cache data key home123 return empty', () => {
    const cache = getCache('home123');
    expect(cache).toBeFalsy();
  });

  it('delete cache data key home', () => {
    deleteCache('home');
    const cache = getCache('home');
    expect(cache).toBeFalsy();
  });
});
