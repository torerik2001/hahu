const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const kategoriasSchema = new Schema({
    _id: Number,
    nev:{
        type:String,
        max:30,
        required:true,
        unique:true
    }
    
})

module.exports = mongoose.model('Kategoria',kategoriaSchema, 'kategoriak');
