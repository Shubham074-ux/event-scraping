const express = require('express');
const app = express();

const PORT = 3000;
const eventsRouter = require('./routes/events');

app.use('/api/events', eventsRouter);


app.get('/',(req, res)=>{
    res.send("hello world")
})

app.listen(PORT , ()=>{
console.log(`server  running on port ${PORT}`);    
})