import {describe, it, expect}  from '@jest/globals'
import request from 'supertest'
import { app } from '..'

describe('POST /sum', () => {
    it('calcuation of sum of two number', async()=>{
        const res = await request(app).post('/sum').send({
            a: 1,
            b: 2
        })
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3)
    })
    it('there is 411 if there is no input provide', async() =>{
        const res = await request(app).post('/sum').send({});
        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe('Incorrect inputs');
    })
    it('there is 411 if there incorrect input are there', async() => {
         const res = await request(app).post('/sum').send({
             a : "jdjd",
             b: 4
         })
          expect(res.statusCode).toBe(411);
          expect(res.body.message).toBe('Incorrect inputs');

    })
})

  describe('SET /sum', ()=>{
      it('should return sum of two numbers', async()=>{
        const res = await request(app).get('/sum').set({
            a: "4",
            b: "5"
        }).send();
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(9);
      })

      it("should return 411 if no inputs are provided", async () => {
        const res = await request(app)
            .get("/sum").send();
        expect(res.statusCode).toBe(411);
    });
  })

