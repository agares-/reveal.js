var fs = require('fs');

fs.readFile("data.txt", function(err, data) {
    console.log(data.toString());
});
console.log("Campuseros!! ");