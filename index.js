const express = require('express');

//used in 11 line path.join
const path = require('path');
const port = 8000;

const app = express();

//Set EJS as templating engine
app.set('view engine','ejs');
//looks for folder views in current directory
app.set('views',path.join(__dirname,'views'))

app.get('/',function(req,res){
    //returning index.ejs file feom view folder
   return res.render("index",{title:"my contacts-list"});
})


app.listen(port,function(err){
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(port);
})