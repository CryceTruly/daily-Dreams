const mongoose=require('mongoose');
const Day=require('../models/day');
const express=require ('express');
const router=express.Router();
const jwt=require('jsonwebtoken');
const passport=require('passport');

//getalldays
router.get('/',function(req,res,next){
    Day.find({},function(err,data){
        if(err){
            res.json({msg:'An error has occured'});
            throw err;
        }else{
            res.json(data);
        }
      
    });

});
router.get('/id',(req,res)=>{
   console.log('ID '+req.query._id);
   
    Day.findById(req.query._id,(err,day)=>{
if(err){
    res.json({msg:"Could not fetch Details "+err});
    throw err;
}else{
    res.json(day);
}
    });
})

//post

router.post('/create',function(req,res,next){
    console.log(req);
    
  let day=new Day({
      story:req.body.story,
      feeling:req.body.feeling
  })
  ;
  day.save((err,day)=>{
      if(err){
          res.json({success:false,msg:"could not create memory"});
          throw err;
      }
      res.json({success:true,data:day._id,msg:"Memory created successfully"})
  })
    
    });


module.exports=router;