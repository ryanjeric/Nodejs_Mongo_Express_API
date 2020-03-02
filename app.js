// TUTS ON Dev Ed
// https://www.youtube.com/watch?v=vjf774RKrLc
const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const app = express();
require('dotenv/config');
const cors = require("cors");

// CORS
app.use(cors())


app.use(bodyParser.json());

//IMPORT ROUTES
const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute);
//app.use('/user',usersRoute); - users

// Middlewares express (execute on routes)
/* 
app.use(auth);
app.use('/posts', ()=>{
    console.log("THIS IS A MIDDLEWARE RUNNING")
}) 
*/

//ROUTES [ app.get, app.delete, app.post, app.put, app.patch]
app.get('/', (req,res) => {
    res.send('We are on home')
})

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('DB Connected!'))
.catch(err => {
    console.log("Connection Error: ", err.message);
});


// Listen server
app.listen(3000);