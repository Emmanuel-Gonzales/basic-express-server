'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('Server', () => {
  it('handles the root path', async () => {
    const response = await mockRequest.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy;
    expect(response.text).toEqual('Hello Heloo');
  });

  test('handles person GET request', async () => {
    const response = await mockRequest.get('/person?name=Duke');

    expect(response.status).toEqual(200);
    expect(response.text).toEqual('{"name":"Duke"}');
  });

  test('handles bad route and method', async () => {
    const response = await mockRequest.get('/badrequest');
    expect(response.status).toEqual(404);

    const newResponse = await mockRequest.post('/person?name=Duke');
    expect (newResponse.status).toEqual(404);
  });
});
