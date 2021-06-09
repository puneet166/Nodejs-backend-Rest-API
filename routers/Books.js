const express = require('express') // its for beacuse i want use express in here.
const router = express.Router() //ussing express object for router basically its routing purpose
const Books = require('../models/Book') // import model here that is Book
router.get('/',async(req,res)=>{ // it exceute when this books.js will call and in parameter it hold requesty and responce objects
    try{
        const books = await Books.find()
        res.json(books) // send back in json format

    }
    catch(err){
        res.send('Error'+err) // send responce to frontend or apicall method

    }
})
// routers for post request
router.post('/',async(req,res)=>
{
    const data= new Books({
        Book_Title:req.body.Book_Title, // get the value from key 
        Author_Name:req.body.Author_Name,
    })
    //save the data into database
    try{
        const a=  data.save()
        res.json(a)


    }
    catch(err){
        res.send('Error')
    }
})
//get data using id for particular single author or book

router.get('/:id',(req,res)=>{ // it exceute when this books.js will call and in parameter it hold requesty and responce objects
    try{
        const book = Books.findById(req.params.id)
        res.json(book) // send back in json format

    }
    catch(err){
        res.send('Error'+err) // send responce to frontend or apicall method

    }
    res.send('Get request') // send responce to frontend or apicall method
})

module.exports = router //export this module then it will accessess it in app.js file