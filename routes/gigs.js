const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Gig = require("../models/Gig");
const Sequelize = require('sequelize');

// Get gig list
router.get('/', (req, res) => 
  Gig.findAll()
  .then(gigs => {console.log(gigs), res.sendStatus(200)})
    .catch(err => console.log(err)));

// Add a gig
router.get('/add', (req,res) => {
    const data = {
        title: 'Looking for Angular Js Developer',
        technologies : 'Html, CSS, JavaScript, Angular, NodeJS',
        description : 'The condidate should knowledge and expreience above technologies',
        budget : '$2000',
        contact_email: 'user2@mail.com'
    }

    let { title, technologies, description, budget, contact_email } =data;

    //Insert into table
    Gig.create({
        //since , variable for db and schema are same so need to write like title = title
        title,
        technologies,
        description,
        budget,
        contact_email
    })
    .then(gig => res.redirect('/gigs'))
    .catch(err => console.log(err))
})    
module.exports = router;
