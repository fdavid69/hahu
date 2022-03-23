const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const hirdetesSchema= new Schema({
    
    _id: Number,
    kategoria:
    {
        type: Number,
        default: 1
    },
    cim:{
    type:String,
    required: true,
    uniquie:true,
    maxlenght:100
    },
    leiras:{
        type: String,
        maxlenght: 3000
    },
    hirdetesDatuma:{
        type:Date,
        default: Date.now
    },
    Serulesmentes: Boolean,
    arFt:{
        type: Number,
        required: true
    },
    kepUrl:{
        type: String,
        maxlenght: 300
    }

})

module.exports= mongoose.model('Hirdetes',hirdetesSchema,'hirdetesek');