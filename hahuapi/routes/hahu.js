const express = require('express');
const router= express.Router();

const  Hirdetes= require('../models/hirdetes');

router.post('/', function (req,res,next){
    
  const _id=req.body._id;
  const kategoria=req.body.kategoria;
  const cim=req.body.cim;
  const leiras=req.body.leiras;
  const hirdetesDatuma=req.body.hirdetesDatuma;
  const Serulesmentes=req.body.Serulesmentes;
  const arFt=req.body.arFt;
  const kepUrl=req.body.kepUrl;
  try{
      if (arFt %1000 !=0){
          throw Error("Az ár nem osuzható 1000-rel!")
      }
      else{
        const hirdetes= new Hirdetes({_id,kategoria,cim,leiras,hirdetesDatuma,Serulesmentes,arFt,kepUrl})
        hirdetes
        .save()
        .then(res.join({"message":"a rekord rögzítve" }))
      }
  }catch(error){
      res.status(400).json({
          'error': error.message
      })
  }
})
router.get("/", function(req,res,next){
    Hirdetes
    .find()
    .then(hirdetesek =>{
        res.json(hirdetesek);
    })
})
router.delete("/:id",function (req,res,next){
    const id = req.params.id;
    Hirdetes
    .findByIdAndDelete(id)
    .then(res.jso)({
        'statuss': 'deleted'
    })
    .catch(err => console.log(err))
})
module.exports = router;