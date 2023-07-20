const fs = require('fs');
const { Storage } = require("@google-cloud/storage");
require('dotenv').config();

let myprivatekey= process.env.PRIVATE_KEY;
console.log("myprivatekey", myprivatekey);
myprivatekey= myprivatekey.replace(/\\n/g, '\n');
console.log('new private key', myprivatekey)

let serviceAccount= {
    type: process.env.TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: myprivatekey,
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URI ,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url:process.env.CLIENT_X509_CERT_URL,
    universe_domain: process.env.UNIVERSE_DOMAIN

}


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





  
 