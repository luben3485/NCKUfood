var express = require('express')
var router = express.Router()
var path = require('path')
router.get('/web_shop',function(req,res){
    res.sendFile(path.join(__dirname, '../../public', 'nckufood_shop.html'))  
}) 

router.get('/css/nckufood_shop.css', function(req, res) {
  res.sendFile(path.join(__dirname,'../../public/css/','nckufood_shop.css')) 
  }) 
router.get('/js/nckufood_shop.js', function(req, res) {
  res.sendFile(path.join(__dirname + '../../public/js','nckufood_shop.js')) 
  }) 

module.exports = router 
