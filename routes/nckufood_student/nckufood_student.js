var express = require('express')
var router = express.Router()
var path = require('path')
var US = require('../../modules/Users/Users.model')
var STU = require('../../modules/Students/Students.model')
var ev = require('../../event/event')
var mes = require('../../utils/mes')
var fb = require('../../fb')
var FBMessenger = require('fb-messenger')
var func = require('../../modules/Users/function')
var probability = require('../../modules/Users/probability')
var ratio = 10
messenger = new FBMessenger(fb.page_token)
global.EVENTS = []

router.get('/nckufood_student',(req,res)=>{
  res.send('{"status":"success"}')  
  var ajaxdata = req.query 
  
  //從db抓下來
 // var ori_candidate_people = ["1724602970946499","1493495980699051","1522796911138184","1485510774829902","1553340364755635","1983767974968546"] 
 // var candidate_probability = [0.2,0.2,0.2,0.2,0.2] 
  US.who_subscribe_storeA("free",(ori_candidate_people)=>{
    console.log('ori')
    console.log(ori_candidate_people)

    var selectedPeople =  probability(ori_candidate_people,ajaxdata.food_number,ratio)
    console.log('select')
    console.log(selectedPeople)
   
      STU.addStudents({
        id:ajaxdata.id,
        food_name:ajaxdata.food_name,
        food_number:ajaxdata.food_number,
        deadline:ajaxdata.deadline,
        location:ajaxdata.location,
        image_url:ajaxdata.image_url
      }) 

      //Create an event
      

      ev.event({
        id:ajaxdata.id,
        food_name:ajaxdata.food_name,
        food_number:ajaxdata.food_number,
        deadline:ajaxdata.deadline,
        location:ajaxdata.location,
        image_url:ajaxdata.image_url,
        promotion : selectedPeople,
        who_say_yes:[],
        who_say_no:[]
      }) 
      var ev_element = Object.assign({},ev) 
      global.EVENTS.push(ev_element) 
    //Create an event

      var sendfood = mes.sendfood(ajaxdata)
      var tossfooder = mes.tossfooder(ajaxdata)
      fb.handleMessage('1395633180554060',"",sendfood) //給管理員看
      messenger.sendTextMessage('1395633180554060',ev.id) //給管理員看誰發的
      for(var i=0; i < ev.promotion.length;i++){
        fb.handleMessage(ev.promotion[i],"",sendfood)
        console.log("發食物給 " + ev.promotion[i] + "!")
      }
      fb.handleMessage(ev.id,"",tossfooder) 
       // fb.handleMessage(myloveobj.id,"",tossfooder)
  })

}) 
module.exports = router

