import mongoose from "mongoose";

const url = "mongodb://mongo:27017/user";

async function connectMongodb() {
   try {
    const monoConnected = await mongoose.connect(url);
    if(monoConnected) {
        console.log('Mongodb connected')
    }
   }catch(err) {
    console.log(err);
   }
}
connectMongodb();

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    employee : Boolean,
})

export const User = mongoose.model('User', userSchema);

