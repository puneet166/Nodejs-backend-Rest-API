const mongoose =require('mongoose')//import mongoose here

// let create schemas
 const booksSchema = new mongoose.Schema({

  Book_Title:{
      type:String,
      required:true
  },

  Author_Name  :{
      type:String,
      required:true
  },
 })

 module.exports= mongoose.model('Books',booksSchema) // exporting books schema here