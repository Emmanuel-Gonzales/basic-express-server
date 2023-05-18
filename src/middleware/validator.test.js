'use strict';

const { app } = require('../server');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('Validator', () => {
  it('confirms the validator is producing a service 500 error', async () => {
    const response = await mockRequest.get('/person');

    expect(response.status).toBe(500);
    expect(response.text).toEqual('error 500: please input a name query');
  });

});