import { describe, test, it, expect } from 'vitest'
import request from 'supertest';
import { app } from '../index';

describe("calculation of numbers", () => {
    describe('POST /sum ', () => {
        it('sum of 5,8 should be 13', async () => {
            const res = await request(app).post('/sum').send({
                a: 5,
                b: 8
            })
            expect(res.statusCode).toBe(200);
            expect(res.body.answer).toBe(13);
        }),
            it("should return 411 if no inputs are provided", async () => {
                const res = await request(app).post("/sum").send({});
                expect(res.statusCode).toBe(422);
                expect(res.body.message).toBe("Incorrect inputs");
            });
    }),
        describe('GET /sum', () => {
            it('geting 15, sum of 10 and 5', async () => {
                const res = await request(app).get('/sum').set({
                    a: "10",
                    b: "5"
                }).send();

                expect(res.statusCode).toBe(200);
                expect(res.body.answer).toBe(15);
            }),

                it('getting 422 error on incorrect input', async () => {
                    const res = await request(app).get('/sum').set({
                        a: 'aa',
                        b: "5"
                    })
                    expect(res.statusCode).toBe(422),
                        expect(res.body.message).toBe('Incorrect inputs')
                })

        })
})