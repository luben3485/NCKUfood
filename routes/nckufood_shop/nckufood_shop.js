var express = require('express')
var router = express.Router()
var path = require('path')

router.get('/nckufood_shop',(req,res)=>{
  //Give an id to find everything this user subscribe
  //return [{value:store_name,check:Boolean}]
  var id = req.query.id;
//  res.send(US.rending(id));
})
module.exports = router

