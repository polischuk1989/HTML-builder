const { stdin, stdout } = process;
const fs = require('fs');
const path = require('path');

stdout.write('Здравствуйте, введите текст\n');

process.stdin.on('readable', () => {
  fs.open(path.resolve(__dirname,'textFile.txt' ), 'a+', (err) => {
    if(err) throw err;
        
  });

  let chunk;
 
  
  while ((chunk = process.stdin.read()) !== null) {
    fs.appendFile(path.resolve(__dirname,'textFile.txt'), chunk,(err) => {
      if(err) throw err;
      stdin.on('data', data=>{
        if(data.toString() === 'exit'){
          process.exit(0);
        }
      }
      );
    }); 
    
    
  } 
    
});






