 // Import the fs (file system) module
const fs = require('fs');

// Read the JSON data from the file
fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Parse the JSON data into a JavaScript object
    const jsonData = JSON.parse(data);

    // Now you can work with the jsonData object
    console.log(jsonData);
});
