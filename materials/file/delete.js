const fs = require('fs');
const path = require('path');

fs.unlink(path.join(__dirname, './delete/delete.txt'), err => {
  if (err) {
    console.log(err);
  }

  fs.rmdir(path.join(__dirname, './delete'), err => {
    if (err) {
      console.log(err);
    }

    console.log('Deleted');
  });
});
