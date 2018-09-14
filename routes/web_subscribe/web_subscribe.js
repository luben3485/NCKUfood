var express = require('express')
var router = express.Router()
var path = require('path')
router.get('/css/subscribe2.css', function(req, res) {
  res.sendFile(path.join(__dirname,'../../public/css','subscribe2.css')) 
  }) 
router.get('/js/subscribe2.js', function(req, res){
  res.sendFile(path.join(__dirname,'../../public/js','subscribe2.js')) 
  }) 
router.get('/web_subscribe',function(req,res){
  res.sendFile(path.join(__dirname,'../../public','subscribe2.html')) 
  }) 
module.exports = router 
