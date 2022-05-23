
const fs = require('fs');
const path = require('path');



fs.readdir(path.resolve(__dirname,'secret-folder' ),{withFileTypes: true},  (err, files) => {
  files.forEach(file => {
    
    
    fs.stat(path.resolve(__dirname,`secret-folder/${file.name}`), (error, stats) => {
      if (error) {
        console.log(error);
      }
      else if (stats.isFile()){
          
        console.log(file.name +' -', path.extname(file.name) + ' -',stats.size /1000 + ' kb');
        
        /*console.log('Path is file:', stats.isFile());
        console.log('Path is directory:', stats.isDirectory());*/
      }
    });

  });

});










