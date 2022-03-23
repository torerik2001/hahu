# hahu
0. Ha nincs telepitve express-generator akkor: npm i -g express-generator
1. cmd -> express --no-view hahuapi (cd hahuapi,npm i)
2. nodemon telepitese: npm i --save nodemon (start script szerkesztese(nodemon))
3. mongoose: npm i --save mongoose

A 2. feladat: adatbázis létrehozása
1. A lokális mongodb elinditása: cmd-ben: mongod parancs (nem lehet becsukni)
2. mongodb://127.0.0.1:27017 csatlakozás az adatbazishoz compassba
3. adatbázisok, kollekciok létrehozása és jsnon fájlok importálása.

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hirdetesSchema = new Schema({
    _id: Number,
    kategoria:Number,
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
        type:Date
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

6. Thunder Client: 