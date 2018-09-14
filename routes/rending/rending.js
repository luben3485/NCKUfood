var express = require('express')
var router = express.Router()
var path = require('path')
var US = require('../../modules/Users/Users.model')


router.get('/rending',(req,res)=>{
  var id = req.query.id
  US.findbyid(id,(exist, responds)=>{
    console.log(exist);
    if(exist === true){
          res.send(responds)
    }
      else if(exist === false){
        res.send(exist);

      }
    })
 // res.send(US.rending(id))
})
module.exports = router

