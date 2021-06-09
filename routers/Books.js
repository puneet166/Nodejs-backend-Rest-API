const express = require('express') // its for beacuse i want use express in here.
const router = express.Router() //ussing express object for router basically its routing purpose
const Books = require('../models/Book') // import model here that is Book
// routers for post request
router.post('/setRecord',async(req,res)=>
{
    const data= new Books({
        Book_Title:req.body.BookTitle, // get the value from key 
        Author_Name:req.body.AuthorName,
    })
    //save the data into database
    try{
        const a=  data.save()
        res.send(data._id)


    }
    catch(err){
        res.send('Error')
    }
})
//get data using id for particular single author or book

router.get('/getRecord/:id',async(req,res)=>{ // it exceute when this books.js will call and in parameter it hold requesty and responce objects
    try{
        const book = await Books.findById(req.params.id)
       // console.log('punjjjeet')
        res.json({"Book_Title":book.Book_Title,"Author_Name":book.Author_Name}) // send back in json format

    }
    catch(err){
        res.send('Error'+err) // send responce to frontend or apicall method

    }
})

module.exports = router //export this module then it will accessess it in app.js file