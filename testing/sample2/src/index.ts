import express from 'express';
export const app = express();

app.use(express.json());

app.post('/', (req,res)=> {
    let a= req.body.a;
    let b = req.body.b;

    const ans = a+b;

    return res.status(200).json({
        'answer' : ans
    })
})