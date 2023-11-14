var fs = require("fs");

console.log("Going to write into existing file");

fs.writeFile('sample.txt','Web tech stuff',function(err) {
    if(err) {
        return console.error(err);
    }
    console.log("Data written successfully");
})