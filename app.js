var express = require('express');
var mongoose= require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path =require('path');  

var app = express();

const route=require('./routes/route');  

//conect to mongodb
mongoose.connect('mongodb://localhost:27017/userlist');

//on connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to Mongodb @ 27017');

});
mongoose.connection.on('error',(err)=>
{
    if(err){
        console.log('Error in Data Based Connection'+err);
    }
     console.log('Connected to Mongodb @ 27017');
 
})

//port no
const port= 3000;

//adding middelware cors
app.use(cors());

  //body parsore
  app.use(bodyParser.json());

  
        //static files
        app.use(express.static(path.join(__dirname,'public')));
 

   //routes
app.use('/api', route);



//testing server
app.get('/',(req,res)=>{
res.send('foobar');
});

app.listen(port,()=>{
    console.log('Server is runnning at ' + port);

});
 










  
   