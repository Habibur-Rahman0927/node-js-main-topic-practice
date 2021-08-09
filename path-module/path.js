console.log("path module");
const path = require('path');

console.log(path);
console.log(path.join());
console.log(path.extname(__filename));
console.log(__dirname);
console.log(path.parse(__filename));

//concatenate paths
// ../test/hello.html
console.log(path.join(__dirname, 'test','hello.html'));
console.log(__dirname + '/path/test.js');
console.log(path.normalize('///////path-clear////////test.js'));

console.log(typeof(__dirname));
console.log(path.basename(__filename));
console.log(path.basename(__dirname));
