const express = require('express');
const app = express();

app.post('/message',(req,res)=>{
    const message = req.body.message;
    console.log(message);
    res.send('OK');
});

app.listen(3200, () =>{
    console.log('Server listening on port 3200');
});