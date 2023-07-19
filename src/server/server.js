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
require('dotenv').config()
const {uploadmessage} = require('./Google.js');


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

app.post('/sendmessage', async (req, res) => {
    const mailcontent= req.body;
    const text= "Message: "+mailcontent.message;
    const name= mailcontent.name;
    const combinedtext= "From:"+name+"\n"+ "Email:"+ mailcontent.email +"\n"+text;

   //write a file inside the Messages folder
   const filename = `./${name}.txt`;
    fs.writeFile(filename, combinedtext, async function (err) {
        if (err) {
            console.error('Error while writing file:', err);
            res.status(500).send(err);
            return;
        }
        console.log('File saved successfully!');

        // Now upload to Google Cloud Storage
        try {
            const result = await uploadmessage(filename);
            if (result) {
                console.log('Uploaded to Google Cloud Storage');
                res.status(200).send('Message received and uploaded');
            }
        } catch (error) {
            console.error('Error while uploading:', error);
            res.status(500).send(error);
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);

