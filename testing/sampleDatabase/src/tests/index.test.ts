import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import { app } from '..';
import { userfn } from '../utils/user';
import { prismaClient } from '../__mocks__/db';

// It is a simple technique of moocking.
// vi.mock('../db', ()=>{
//     return  {
//         prismaClient : {
//             cal : {
//                create : vi.fn()
//             }
//          }
//     }
// })
// Second way for mooking

vi.mock('../db');
vi.mock('../utils/user')

describe('POST, /sum', () => {
     it('sum of number 4,5 is 9', async () => {
          prismaClient.cal.create.mockResolvedValue({
               id: 1,
               a: 4,
               b: 5,
               answer: 9,
               type: 'sum'
          })
          vi.spyOn(prismaClient.cal, "create")
          const res = await request(app).post('/sum').send({
               a: 4,
               b: 5
          })
          //    console.log(userfn());
          expect(prismaClient.cal.create).toHaveBeenCalledWith({
               data: {
                    a: 4,
                    b: 5,
                    answer: 9,
                    type: "sum"
               }
          })
          expect(res.statusCode).toBe(200);
          expect(res.body.answer).toBe(9);
          expect(res.body.id).toBe(1);

     })

})