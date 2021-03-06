const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hirdetesSchema = new Schema({
    _id: Number,
    kategoria:{
        type:Number,
        default: 1
    },
    cim:{
        type:String,
        required:true,
        unique:true,
        max:100
    },
    leiras:{
        type:String,
        max:3000
    },
    hirdetesDatuma:{
        type:Date,
        default: Date.now
    },
    serulesmentes:Boolean,
    arFt:{
        type:Number,
        required:true
    },
    kepUrl:{
        type:String,
        max:300
    }
})

module.exports = mongoose.model('Hirdetes',hirdetesSchema, 'hirdetesek');
