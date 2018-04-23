import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const eventSchema = new Schema({
    name:{
        type:String,
        required:true,
        es_indexed:true
    },
    image:{
        type:String
    },
    thumbnail:{
        type:String
    },
    description:String,
    members:[
        {
            type:Schema.ObjectId,
            ref:'User'
        }
    ],
    creator:{
        type:Schema.ObjectId,
        ref:'User'
    },
    createdAt:{
        type:Date
    },
    UpdatedAt:{
        type:Date
    }
});

const eventModel = mongoose.model('Event', eventSchema);

export default eventModel;