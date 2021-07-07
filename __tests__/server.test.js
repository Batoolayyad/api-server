'use strict';
// const supergoose = require('@code-fellows/supergoose');
const { app } = require('../src/server');
const supertest=require('supertest')
const request = supertest(app);
describe('API Server', ()=>{
  let id;
  it('404 on a bad route', async ()=>{
    const response = await request.get('/Hello World');
    expect(response.status).toEqual(404);
  });
  it('404 on a bad method', async ()=>{
    const response = await request.patch('/api/v1/food');
    expect(response.status).toEqual(404);
  });
  it('Create a record using POST', async () => {
    let obj = { type:'watermelon',price:7 };
    const response = await request.post('/api/v1/food').send(obj);
    id = response.body.id;
    expect(response.body.type).toBe(obj.type);
    expect(response.body.price).toBe(obj.price);
    expect(response.status).toEqual(200);
  });
  it('Read a list of records using GET', async () => {
    const response = await request.get('/api/v1/food');
    expect(response.body[0].type).toBe('watermelon');
    expect(response.body[0].price).toBe(7);
    expect(response.body.length).toBe(1);
    expect(response.status).toEqual(200);
  });
  it('Update a record using PUT', async ()=>{
    const obj={
      type:'pineapple',
      price:5,
    };
    const response = await request.put('/api/v1/food/'+id).send(obj);
    expect(response.status).toEqual(200);
    expect(response.body.type).toBe('pineapple');
  });
  it('Handles deleting a record', async ()=>{
    const response = await request.delete('/api/v1/food/'+id);
    expect(response.status).toEqual(200);
    expect(response.body.type).toBe('pineapple');
  });
});