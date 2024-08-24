import express from 'express';
import {z} from 'zod';
import { prismaClient } from './db';
 
export const app = express();
app.use(express.json());

const userSchema = z.object({
     a : z.number(),
     b : z.number()
})

app.post('/sum', async(req,res) => {
    const parseValidation = userSchema.safeParse(req.body);

    if(!parseValidation.success) {
        return res.status(422).json({
            message : "Incorrect inputsqq"
        })
    }

     if(parseValidation.data.a > 9999 || parseValidation.data.b > 9999) {
         return res.status(411).json({
            message : "range of numbers is not in the limit"
         })
     }

    const request =  await prismaClient.cal.create({
        data : {
            b : parseValidation.data.b,
            a : parseValidation.data.a,
            answer : parseValidation.data.a + parseValidation.data.b,
            type : "sum"
        }
     })

     const answer =parseValidation.data.a + parseValidation.data.b;

     return res.status(200).json({
         answer,
         id : request.id
     })
})