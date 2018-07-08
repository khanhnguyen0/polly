const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('cors')
const mongoose = require('mongoose')
const shortid = require('shortid')

mongoose.connect('mongodb+srv://khan:khan@vainu-lead-qlquk.mongodb.net/test?retryWrites=true',{ useNewUrlParser: true })


app.post('/new/', (req, res)=>{
  res.send('<h1>Hello world</h1>');
});

app.get('/:id',(req,res)=>{

})

http.listen(3000, function(){
  console.log('listening on :3000');
});
