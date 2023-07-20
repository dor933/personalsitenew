const fs = require('fs');
const { Storage } = require("@google-cloud/storage");
require('dotenv').config();


const bucketname = process.env.BUCKET_NAME;


async function uploadmessage (myfile) {

    const base64key= process.env.NEWPRIVATEKEY;
const buff = Buffer.from(base64key, 'base64');
const key = buff.toString('utf-8');

console.log("key", key);




const storage = new Storage( {
    projectId: process.env.PROJECT_ID,
    credentials: key
}
);



    await storage.bucket(bucketname).upload(myfile, {
        gzip: true,
        metadata: {
            cacheControl: 'public, max-age=31536000',
        },
    });
    console.log(`${myfile} uploaded.`);
    return true;

}

module.exports= {
    uploadmessage
}





  
 