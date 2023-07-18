const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const nodemailer = require('nodemailer');
const cors = require('cors');
app.use(express.json());
app.use(cors());
//import fs 
const fs = require('fs');
const path = require('path');

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../../build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../build/index.html'));
    });
}




app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.post('/sendmessage', (req, res) => {

    const mailcontent= req.body;
    console.log(mailcontent);
    const text= "Message: "+mailcontent.message;
    const name= mailcontent.name;
    const combinedtext= "From:"+name+"\n"+ "Email:"+ mailcontent.email +"\n"+text;

   //write a file inside the Messages folder
    fs.writeFile('./Messages/'+name+'.txt',combinedtext, function (err) {
        if (err) throw err;
        console.log('Saved!');
      }
    );



}
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);

