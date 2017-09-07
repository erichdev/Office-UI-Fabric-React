let JSFtp = require("jsftp");
let argv = require('yargs').argv;

let config = {
  host: argv.host,
  user: argv.user,
  pass: argv.password
};

let Ftp = new JSFtp(config);

//
Ftp.list('site/wwwroot', function (err, res) {
  console.log('inside list');

  if (err)
    console.error(err);

  console.log('content: ' + res);
});

Ftp.on('data', function (data) {
  console.log('DATA: ', data);
})

Ftp.on('connect', function (data) {
  console.log('CONNECT: ', data);
})
//

//
Ftp.on('progress', function (data) {
  console.log('PROGRESS: ', data);
})

Ftp.on('error', function (data) {
  console.log('ERRRR: ', data);
})
//

Ftp.put('test.txt', 'site/wwwroot/v-erabe/newcopy.txt', function (err) {
  if (!err)
    console.log("File transferred successfully!");

  else
    console.error('Error uploading' + err);
});