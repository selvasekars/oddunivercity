const express = require('express')
const app = express()
const mysql =require('mysql') 

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'application'
})

app.use(express.json());

const courses = [
{id:1, name: 'selva' },


];

app.get('/', function (req, res) {
  
  connection.query("SELECT * FROM internaluser",(err,rows,feilds)=>{
  
    console.log("i thing working fine connection")
    res.json(rows)
  })

  
});

app.get('/api/get',function(req,res){
  
   
  connection.query("SELECT * FROM internaluser",(err,rows,feilds)=>{
  
    console.log("i thing working fine connection")
    res.json(rows)
  })

})


app.get('/api/me/:id',function(req,res){
res.send(req.params.id);
});

app.get('/api/test/courses',function(req,res){
res.send(courses);
});

app.get('/api/post/:year/:month',function(req,res){
    res.send(req.params);
    });
app.post('/api/courses',function(req,res){
const course = {
    id:courses.length + 1,
    name:req.body.name
};
courses.push(course);
res.send(course);
});

// app.put('/api/put/courses/:id',function(req,res){
//     const coursess ={
// coursess.name = req.body.name;
// };
// res.send(coursess);

// });

app.listen(3000,() => console.log('your server is start now'));
