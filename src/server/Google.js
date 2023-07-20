const fs = require('fs');
const { Storage } = require("@google-cloud/storage");
require('dotenv').config();


let serviceAccount= {
    type: process.env.TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCZUhNUD+34s2zN\ngA0fQ4e0Ul4eKuCiKu/1XWYXayIWNic6VmX47DrVJ6b3Lx1Xc2MoVdoD+hQXKvHa\nVJUUbJJF1aC87cZKmgDeSJhoKeEErNJAR0Trdlc+PXATX/XHUV8pu4SSgSU1PGtk\ny+K4iOmsA8aAoP1pn3ysv3hWIny5FLgAZ3ojKuPt9GoBSQ2hq654dNjC6LmppU1z\nmAcq8aeiw+gsEv0GvacdvbomIAvvE7V0OCKlNQgW7XSY++U8D2SJwJ+0bGkhhG9S\n5d8wc9kbmE+22w40APbx3BOn/CyB8k3s/WyBgUBj2QF0Mork77NzVZY0tlHrDv7l\nhZ9FhKwDAgMBAAECggEAB1poWgNNH1lCs+23Xg+X8o4AvKqKqa4smxft27/kDUkZ\n0WtTXDlNfJY/lmJk96IRESVFz3k9KBguSFiNP5guT0eMCmckDTcARW/8+6yUupZy\n1E0IgSYBJZd3ZQS1KHZ3fXqrfXe0JnXqBfnBSW25VXhnGv0PYywYTqJuaiTn8tvq\nR87mq2KEkB39ZLKp4X43hfuy7QGQFZYu6+r0py+ZRQ10VP72jjNH6qXCTF/3uq+w\nkn7EiMntb85lDlxQsQag+KZj2LzeACd61XYsKiKHwvsxaHjO93SwLCoWQDVG2ZCu\nnreL+nX+vuMuymQuZkThPwTz7M11SLI8J/t26m20AQKBgQDOMWK4MvJAuD72cVN+\npv+R0CYvwMVK7eBcIXG1NZPk37qWExWKmuGEyVEFUtYda0HdC6PB/7yXVlWAEEvr\nqg89JZZYiwb1KvWXz/XhDyKGTRODn4n5YLD7UICmOq2lsF1yBYqbQg+S9jDhcI6C\nVr00fAD19DuVd2WV/KVAEmIEXwKBgQC+WyhbTwnfYBIt11bVKA7aSchJmj5P44Mg\npJpmfWsLgVSTDnDsIvM82fivASZEYVVFslWv9WDpJ3Ls+qzd11dNrR9E6n8cv6sN\nC7AmW8bjcZvAf5tV0Ub2o0XNBdodWz+hmZ/9044IG4t/7BYkFZq3aKK4lFlDVczs\nkPGML5La3QKBgDsZ+sLzj26voRSAnT8jXQQNlrR/W83Da1jdGTuotNCYtGHJ7JXD\nGTs3fSq6eLcMBF/4syKrTAJQ88b2ZNyS7TVIrdSJXSAvBSBTspWlAe9e7mX+98xs\nQ651f7ql/RoN+GrzXaxs/gvQ12f3HFINzMPbe2cEb4PDKnIYbcF0w3WfAoGBAI7U\nK0XH2mqG1V0cFIU/11Umw2emmlarKTqXB1sbg/RQCDuHPGeSGdxw2M3HGQV52te+\n5dhvT1XiSbNSq96Qs2sPGUVGhjX2Asx5FqTRfDwwhGM93DnaG1r4S2l4mJ4qV2ZT\ntN5pnEqtEFDdvgc5RquTkXTZqtiBSo++ed9r2s7pAoGAWSbZjbaZOlphi0aGk4vI\nVlUa7k0Kb10ddwY1EzlxSTNdmaTi+/3hfPxc/NWOwJtqLXJYGsLpcWkLJ2iIspRN\nokFQ00CoUwK6et0XY8WeHT6TVnBeJ0JVFcUe4OONe8ip1uEvhNd2DfEbr/Q1NgBf\n/NoLaBBOXK3EUiiNWb0sKYs=\n-----END PRIVATE KEY-----\n',
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





  
 