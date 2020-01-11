const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

//Database 
const db = require('./config/database');
//Test Db connection
db.authenticate()
.then(() => console.log('Databse connected...'))
.catch(err => console.log('Error '+ err));
const app = express();

app.get('/', (req,res) => res.send('INDEX'));


// Gig routes
app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${PORT}`));