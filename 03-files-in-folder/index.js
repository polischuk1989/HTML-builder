
const fs = require('fs');
const path = require('path');



fs.readdir(path.resolve(__dirname,'secret-folder' ),{withFileTypes: true},  (err, files) => {
  files.forEach(file => {
    console.log(file.name);
    fs.stat(path.resolve(__dirname,'secret-folder'), (error, stats) => {
      if (error) {
        console.log(error);
      }
      else {
          
        console.log(stats.size);
          
        
        console.log('Path is file:', stats.isFile());
        console.log('Path is directory:', stats.isDirectory());
      }
    });

  });

});



fs.stat(path.resolve(__dirname,'secret-folder/script.js'), (error, stats) => {
  if (error) {
    console.log(error);
  }
  else {
    
    console.log(stats.size);
    
  
    console.log('Path is file:', stats.isFile());
    console.log('Path is directory:', stats.isDirectory());
  }
});








