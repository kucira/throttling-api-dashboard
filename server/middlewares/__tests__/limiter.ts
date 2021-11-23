import supertest from 'supertest';

import Limit from '../../interfaces/limit';
import { deleteLimit, getLimit, setLimit } from '../limiter';
import app from '../../app';

describe('limiter unit function', () => {
  const IP = '192.168.0.1;';
  const value: Limit = { request: 1, ttl: Date.now() };
  const request = supertest(app);

  it('set limiter data with ip address', () => {
    setLimit(IP, value);
    const limit = getLimit(IP);
    expect(limit).toBe(value);
  });

  it('get limit data with ip', () => {
    const cache = getLimit(IP);
    expect(cache).toBe(value);
  });

  it('get empty cache data ip 192.168.0.2 return empty', () => {
    const cache = getLimit('192.168.0.2');
    expect(cache).toBeFalsy();
  });

  it('delete limit ip 192.168.0.1', () => {
    deleteLimit(IP);
    const cache = getLimit(IP);
    expect(cache).toBeFalsy();
  });

  it('first call api should return 200', async () => {
    await request.get('/').expect(200);
  });

  it('more than request limit, should return 429', async () => {
    const REQUEST_LIMIT: number = parseInt(process.env.API_REQUEST_LIMIT, 10);
    const a = Array.from({ length: REQUEST_LIMIT - 1 }, () => {
      return 0;
    });
    await Promise.all(
      a.map(async () => {
        return await request.get('/').expect(200);
      }),
    );
    await request.get('/').expect(429);
  });
});
