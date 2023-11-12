const express = require('express');
const phones = require('./phones.json');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors ())

app.get('/', (req ,res) =>{
    res.send('This is Home ')
});
app.get('/data', (req, res) =>{
    res.send('This is data Center')
});

app.get('/phones', (req, res) =>{
    res.send(phones)
});

app.get('/phones/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    console.log('i need data for id ' ,id)
    const phone = phones.find(phone => phone.id === id) || {}
    res.send(phone)


});


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})
