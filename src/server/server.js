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
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY
});

const sendEmail = async (mailcontent) => {

    const mymessage= await mg.messages.create(process.env.MAILGUN_DOMAIN, {
        from: 'Mailgun Sandbox <mailgun@mail.dor-ratzabi.com> ',
        to: ["doratzabi1@gmail.com"],
        subject: 'Message from ' +mailcontent.name,
        text: "Message: " + mailcontent.message + "\n"  + "Email to return: " + mailcontent.email
    })

    if(mymessage.status===200){
        return true;
    }
    else{
        return false;
    }
        

}


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
    // const combinedtext= "From:"+name+"\n"+ "Email:"+ mailcontent.email +"\n"+text;

   const ifsuccess= await sendEmail(mailcontent);

    if(ifsuccess){  
        console.log("Email sent successfully");
        res.status(200).send('Message received and sent');
    }
    else{
        console.log("Email not sent");
        res.status(500).send('Message received but not sent');
    }


   //write a file inside the Messages folder
//    const filename = `./${name}.txt`;
//     fs.writeFile(filename, combinedtext, async function (err) {
//         if (err) {
//             console.error('Error while writing file:', err);
//             res.status(500).send(err);
//             return;
//         }
//         console.log('File saved successfully!');

//         // Now upload to Google Cloud Storage
//         try {
//             const result = await uploadmessage(filename);
//             if (result) {
//                 console.log('Uploaded to Google Cloud Storage');
//                 res.status(200).send('Message received and uploaded');
//             }
//         } catch (error) {
//             console.error('Error while uploading:', error);
//             res.status(500).send(error);
//         }
//     });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);

