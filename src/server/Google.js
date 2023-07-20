const fs = require('fs');
const { Storage } = require("@google-cloud/storage");
require('dotenv').config();


let jsonString =process.env.SERVICE_ACCOUNT_JSON;
jsonString = jsonString.replace(/\n/g, "\\n");
let serviceAccount = JSON.parse(jsonString);
serviceAccount.private_key=serviceAccount.private_key.replace(/\\n/g, "\n");
console.log('hello', serviceAccount)


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





  
 