const express=require('express');
const path=require('path');
const app=express();
const port=8080;
const  morgan = require('morgan')
const db=require('./config/database')

//DB connection checking
db.authenticate()
  .then(() => console.log('----------------Database connected---------'))
  .catch(err => console.log(`-----------Error ${error}-------------`))

  
app.use(express.urlencoded());
app.use(morgan('combined'))

//Routes Setup
app.use('/',require('./routes'));

app.listen(port,function(error)
{
    if(error)
    {
        console.log(`-----------Error ${error}-------------`);
    }

    console.log(`------------Server is up and running on ${port}--------`);
})