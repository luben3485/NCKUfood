var express = require('express')
var router = express.Router()
var path = require('path')

router.get('/web_student',function(req,res){
    res.sendFile(path.join(__dirname, '../../public', 'nckufood_student.html'))  
}) 
router.get('/css/nckufood_student.css', function(req, res) {
  res.sendFile(path.join(__dirname,'../../public/css/','nckufood_student.css')) 
  }) 
router.get('/js/nckufood_student.js', function(req, res) {
  res.sendFile(path.join(__dirname + '../../public/js','nckufood_student.js')) 
  }) 
router.get('/js/imgur.js', function(req, res) {
  res.sendFile(path.join(__dirname,'../../public/js','imgur.js')) 
  }) 
router.get('/css/style.css', function(req, res) {
  res.sendFile(path.join(__dirname,'../../public/css','style.css')) 
  }) 
router.get('/css/mobile-style.css', function(req, res) {
  res.sendFile(path.join(__dirname,'../../public/css','mobile-style.css')) 
  }) 
router.get('/css/loading-spin.svg', function(req, res) {
  res.sendFile(path.join(__dirname,'../../public/css','loading-spin.svg')) 
  }) 

module.exports = router 
