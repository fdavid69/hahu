const express = require('express');
const router= express.Router();

const  Hirdetes= require('../models/hirdetes');

router.post('/', function (req,res,next){
    
  const  _id=req.body._id;
  const kategoria=req.body._id;
  const  cim=req.body._id;
  const  leiras=req.body._id;
  const  hirdetesDatuma=req.body._id;
  const  Serulesmentes=req.body._id;
  const  arFt=req.body._id;
  const  kepUrl=req.body._id;

  const hirdetes= new Hirdetes({_id,kategoria,cim,leiras,hirdetesDatuma,Serulesmentes,arFt,kepUrl})
hirdetes.save()
.then(res.join({status:"created" }))
//.catch((err))
})

module.exports = router;