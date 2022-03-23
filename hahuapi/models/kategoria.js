const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const kategoiaSchema= new Schema({
    
    _id: Number,
    kategoria:Number,
    nev:{
    type:String,
    required: true,
    uniquie:true,
    maxlenght:30
    },
    

})

module.exports= mongoose.model('Kategoria',kategoriaSchema,'kaategoriak');