const path= require('path');
const express = require('express');
const app =express();
app.use(express.static(path.join(__dirname,'file')))
app.get('/',(req,res) =>{
  res.sendFile(`${__dirname}/file/index.html`);
});
// routing
app.get('/home',(req,res)=>{
  res.sendFile(`${__dirname}/file/new.html`);
});
app.listen(8000,()=>{
  console.log('Application is listeng on port 8000');
});
