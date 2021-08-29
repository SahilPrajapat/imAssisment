import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Cards from './dbCard.js'

// App config
const app = express();
const port = process.env.PORT || 8000;
const connection_url = 'mongodb+srv://admin:1w9qiKmWvDmrkolD@cluster0.qaijj.mongodb.net/test-db?retryWrites=true&w=majority'

// Middlewares
app.use(express.json())
app.use(Cors());


// DB config
mongoose.connect(connection_url, {

}).then(console.log("Connected to mongoDb")) .catch(err=>{console.error(err)});

//API Endpoint
app.get('/', (req, res) => res.status(200).send('Working'));

app.post('/cards', (req,res) =>{
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
});

app.get('/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    });
});



//Listner
app.listen(port, ()=> console.log(`listening on localhost ${port}`));

// 1w9qiKmWvDmrkolD