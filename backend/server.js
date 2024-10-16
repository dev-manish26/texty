const express = require('express');
const dotenv = require("dotenv");
const {chats} = require('./data/data');
//const connectDB = require('./config/db');
const { default: mongoose } = require('mongoose');

const app = express();
dotenv.config();

async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
          
        });
    
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
      } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit with a non-zero status code to indicate an error
      }
    
}
connectDB();

//check the server
app.get('/', (req,res)=>{
   res.send("API is running");  
});


//endpoint 1
app.get('/api/chat', (req,res)=>{
    res.send(chats);
})


//endpoint 2
app.get('/api/chat/:id', (req,res)=>{
    //console.log(req.params.id);
    const singleChat = chats.find((c)=>c._id === req.params.id);
    res.send(singleChat);
})

const PORT = process.env.PORT || 500

app.listen(PORT, console.log(`sever running on ${PORT}`));