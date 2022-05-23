const fs = require('fs');
const path = require('path');


fs.mkdir(path.resolve(__dirname,'files-copy' ),  {recursive:true},err => {
  if(err) throw err; // не удалось создать папку
  console.log('Папка успешно создана');
});

fs.readdir(path.resolve(__dirname,'files-copy' ), (err, files) => {
  files.forEach(file => {
    if (err) throw err;
    fs.unlink(path.join(__dirname,`files-copy/${file}`), err => {
      
      if(err) throw err; // не удалось удалить файл
      console.log('Файл успешно удалён');
    });
  });
});

fs.readdir(path.resolve(__dirname,'files' ),  (err, files) => {
  files.forEach(file => {
    
    
    
    fs.copyFile(path.resolve(__dirname,`files/${file}`), path.resolve(__dirname,`files-copy/${file}` ), err => {
      if(err) throw err; // не удалось скопировать файл
      console.log('Файл успешно скопирован');
    });
  });
  
});






/*fs.unlink(path.join(__dirname,`files-copy/${file}`), err => {
      
    if(err) throw err; // не удалось удалить файл
    console.log('Файл успешно удалён');
  });*/