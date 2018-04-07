import mongoose from 'mongoose';
import crypto from 'crypto';

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
    },
    salt:{
        type:String
    },
    createdAt:{
        type:Date
      },
      updatedAt:{
        type:Date
      }
});

userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
}

userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
}

userSchema.set('toJSON', {
    transform:function(doc,ret,options){
        delete ret.salt;
        delete ret.hash;
        return ret;
    }
})

const User = mongoose.model('User', userSchema);
export default User;


