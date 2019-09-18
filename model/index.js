const fs = require('fs').readdirSync;
const modelFiles = fs('./model');

for (let file of modelFiles) {
    filename = file.split('.')[0];
    if (file !== 'index.js') {
        module.exports[filename] = require('./' + file);
    }
};
