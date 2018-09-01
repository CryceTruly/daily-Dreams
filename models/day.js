const mongoose=require('mongoose');

//vars
var date=new Date().toUTCString();

const DaySchema=mongoose.Schema({
  
theday:{
    required:true,
    default:todayDate,
    type:String
},

added:{
    required:true,
    default:date,
    type:String
}
,
story:{
    type:String,
    required:true
},
feeling:{
type:String
}


});

//SINGLE DAY
module.exports.findDayById=function(id,callback){
    return Day.findById(id,callback);
}

//ALL DAYS
//todo order by Date
module.exports.getAllDays=function(callback){
    return Day.find(callback);
}

module.exports.addDay=function(newDay,callback){
     newDay.save(callback);
}

module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if(err) throw err;
        newUser.password = hash;
        newUser.save(callback);
      });
    });
  }
  


module.exports.editDay=function(id,newData,callback){
    return Day.update({_id:id},newData,callback);
}




function todayDate(){
return date.substring(0,date.indexOf(new Date().getFullYear()))+new Date().getFullYear();

   

}



const Day=module.exports=mongoose.model('Day',DaySchema);
