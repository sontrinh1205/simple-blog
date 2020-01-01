// modules
const express = require('express')
const dotenv = require('dotenv')

//setup the enviroment
dotenv.config()

// creat app
const app = express()


// configuration ejs
app.set('view engine', 'ejs');

// index route
app.get('/',(req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 5000

// run sever
app.listen(PORT, () => console.log(`sever is running on port ${PORT}`))