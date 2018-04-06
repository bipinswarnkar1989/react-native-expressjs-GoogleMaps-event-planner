import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String
    },
    hash:{
        type:String
    }
});

const User = mongoose.model('User', userSchema);
export default User;


