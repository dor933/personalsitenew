const fs = require('fs');
const { Storage } = require("@google-cloud/storage");
require('dotenv').config();


const jsonString =process.env.SERVICE_ACCOUNT_JSON;
const serviceAccount = JSON.parse(jsonString);

const storage = new Storage( {
    projectId: process.env.PROJECT_ID,
    credentials: serviceAccount
}
);
const bucketname = process.env.BUCKET_NAME;

  console.log("bucketname", bucketname);

async function uploadmessage (myfile) {

    console.log("myfile", myfile)



    console.log("bucketname", bucketname);


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





  
 