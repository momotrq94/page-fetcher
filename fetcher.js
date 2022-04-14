const args = process.argv;
let arr1 = args.slice(2);
const fs = require('fs');
const request = require('request');

request(arr1[0], (error, response, body) => {
  fs.writeFile(arr1[1], body, err => {
    if (err) {
      console.error(err)
      return
    }
    let stats = fs.statSync("./index.html");
    let fileSize = stats.size;
    console.log(`Downloaded and saved ${fileSize} bytes to ${arr1[1]}`);
    //file written successfully
  });
});

