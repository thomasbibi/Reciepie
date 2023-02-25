const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/reciepe').then(()=>console.log("connected"),(e)=>console.log(e.message))
