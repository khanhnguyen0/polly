const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('cors')
const shortid = require('shortid')
const bodyparser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

var collection = null

app.use(bodyparser.json());
const uri = 'mongodb+srv://khan:khan@vainu-lead-qlquk.mongodb.net/test?retryWrites=true'
MongoClient.connect(uri, {
    useNewUrlParser: true
}, function(err, client) {
    console.log('mongo connected')
    collection = client.db("poll").collection("poll");
    // perform actions on the collection object
});

app.post('/new/', async (req, res) => {
    const {question, answer} = req.body
    const id = shortid.generate()
    collection.insertOne({
        id,
        question,
        answer: answer.map(a => {
            return {answer: a, count: 0}
        })
    }).then(r=>{
    const {result} = r;
    if (result.ok) {
        return res.json({id})
    }
    return res.status(500)
})
});

app.get('/get/:id', (req, res) => {
    
})

http.listen(3000, function() {
    console.log('listening on :3000');
});
