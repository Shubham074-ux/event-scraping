const express = require('express');
const app = express();
const cors = require('cors');  // <-- import cors

const PORT = 3000;
app.use(cors({
  origin: 'https://event-scraping.onrender.com'  // replace with your frontend URL
}));
const eventsRouter = require('./routes/events');

app.use('/api/events', eventsRouter);


app.get('/',(req, res)=>{
    res.send("hello world")
})

app.listen(PORT , ()=>{
console.log(`server  running on port ${PORT}`);    
})
