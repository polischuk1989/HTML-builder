const fs = require('fs');
const path = require('path');
let data = '';





const  readStream = fs.ReadStream(path.resolve(__dirname,'text.txt' ), 'utf8'); 
 
readStream.on('data', function(chunk) { 
  data += chunk; 
}).on('end', function() { 
  console.log(data); 
}); 





