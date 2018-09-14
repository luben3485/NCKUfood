var express = require('express')
var router = express.Router()
var path = require('path')
var US = require('../../modules/Users/Users.model')

router.get('/nckufood_subscribe',(req,res)=>{

  var ajaxdata = req.query
  var newsubscribe = []//origin subscribe array subtract value(chinese store name)
  for(var i=0;i < ajaxdata.subscribe.length ; i++ ){
    newsubscribe.push({id: ajaxdata.subscribe[i].id,check:ajaxdata.subscribe[i].check})
  }
  var data = { id:ajaxdata.id , subscribe: newsubscribe}// following function receives this data
//  console.log("sss:"+data.subscribe[0].check)
  US.subscribe_update(data)// update subscribe(we'll check whether you subscribed in this function)
  res.send("true")
})

module.exports = router

