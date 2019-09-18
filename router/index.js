const fs = require('fs').readdirSync;
const routerFiles = fs('./router');

for (let file of routerFiles) {
    filename = file.split('.')[0];
    if (file !== 'index.js') {
        module.exports[filename] = require('./' + file);
    }
}
