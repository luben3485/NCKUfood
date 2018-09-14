var express = require('express')
var router = express.Router()
var path = require('path')
var mes = require('../../utils/mes')
//處理fb事件
router.post('/webhook',(req, res)=>{
  let body = req.body
  console.log("i am")
  if(body.object === 'page'){
    mes.dealmes(body,res,global.EVENTS)
  }
  else{
    res.sendStatus(404) 
  }
}) 

router.get('/webhook',(req,res)=>{
  let VERIFY_TOKEN = "aaabbb" 
  let mode = req.query['hub.mode'] 
  let token = req.query['hub.verify_token'] 
  let challenge = req.query['hub.challenge'] 
  if(mode&& token){
    if(mode==='subscribe' && token === VERIFY_TOKEN){
      res.status(200).send(challenge) 
    }else{
      res.sendStatus(403) 
    }
  }
}) 
module.exports = router 
