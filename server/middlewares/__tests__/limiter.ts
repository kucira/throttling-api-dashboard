import Limit from '../../interfaces/limit';
import { deleteLimit, getLimit, setLimit } from '../limiter';

import request from 'supertest';
import server from '../../index';

describe('limiter unit function', () => {
  const IP = '192.168.0.1;';
  const value: Limit = { request: 1, ttl: Date.now() };
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
    const res = await request(server).get('/');
    expect(res.statusCode).toEqual(200);
  });

  it('more than request limit, should return 429', async () => {
    await request(server).get('/');
    await request(server).get('/');
    const res = await request(server).get('/');
    expect(res.statusCode).toEqual(429);
  });
});
