const { readFileSync } = require('fs');
const { resolve } = require('path');

module.exports = {
    process: function(src, filename) {
        return readFileSync(resolve(__dirname, 'proxy.js'), {
            encoding: 'utf8'
        })
    }
};
