import express from 'express';
import { User } from './db';

const app = express();

app.use(express.json());

app.post('/user', async function(req,res) {
    const {name, email, employee} = req.body;
    try {
        const user  = await User.create({
            name, 
            email,
            employee  
        })

         return res.status(200).json({
            msg : "Your data has been saved",
            id : user.id,
            name : user.name
         })

    }catch(err) {
        console.log(err);
        return res.status(500).json({
            mag : "there some issue in the databse"
        })
    }
})

app.get('/all', async(req,res) => {
    try {
        const user = await User.find({});
         return res.status(200).json(user);
    }catch(e) {
        console.log(e);
        return res.status(500).json({
            msg : "Some error in the databse"
        })
    }
})

app.listen(3000, () => {
    console.log("post listening on 3000")
});