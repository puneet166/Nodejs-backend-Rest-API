const express =require('express') // its for beacuse i want use express in here.
const mongoose = require('mongoose') //i want use mongoose here so import mongoose

const app = express()// here we r starting out express framework.


const dburl='mongodb://localhost/Book' //Book is our database name and located on local host
// set the mongodb in your enviroment variable its not neccesory step
//connect to the mongo database
mongoose.connect(dburl,{useNewUrlParser:true}) 
const con=mongoose.connection //get whole connection now
// when database open it below event fire , 
con.on('open',()=>{
    console.log('conected')
})
app.use(express.json()) // tell our express we wil use json its just like middlewares
//here we are doing routing
const bookRouter = require('./routers/Books') // import Books module which were crated in routers folder.
app.use('/Books',bookRouter) // its working as middleware// if request come for /books then above line forward this request to our Books .js file
// for listen the server on port no 9000.
app.listen(9000,()=>{
    console.log('server started')
})
