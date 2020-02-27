import { readdirSync } from 'fs';

const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, './files');
const sorted = path.join(__dirname, './dist');

// const deletePath = (_path: string, callback?:Function) => {
//   if (!fs.existsSync(_path)) {
//     return;
//   }

//   const dirFiles = removeDir(_path, callback);

//   if (dirFiles.length) {
//     dirFiles.forEach((element: string) => {
//       const localElement: string = path.join(_path, element);

//       const state = fs.statSync(localElement);

//       if (state.isDirectory()) {
//         deletePath(localElement, () => removeDir(_path));
//       } else {
//         fs.unlink(localElement, (error: any) => {
//           if (error) {
//             console.log(error);
//           }

//           if (callback) {
//             callback();
//           }
//         });
//       }
//     });
//   } else {
//     if (callback) {
//       callback();
//     }
//   }

//   function removeDir (removedDirPath: string, callback?:Function) {
//     const dirFiles = fs.readdirSync(removedDirPath);

//     if (!dirFiles || !dirFiles.length) {
//       fs.rmdir(removedDirPath, (error: any) => {
//         if (error) {
//           console.log(error);
//         }
//       });

//       // return true;
//       if (callback) {
//         callback();
//       }
//     }

//     return dirFiles;
//   }
// };

const level = 0;

const deletePath = (base:string, callback?:Function) => {
  if (!fs.existsSync(base)) {
    if (callback) {
      callback();
    }
    return null;
  }

  const dirFiles = fs.readdirSync(base);

  if (dirFiles.length) {
    dirFiles.forEach((dirFile: string) => {
      const dirFilePath: string = path.join(base, dirFile);

      const state = fs.statSync(dirFilePath);

      if (!state.isDirectory()) {
        deleteFile(dirFilePath);
      } else {
        deletePath(dirFilePath);
      }

      console.log(dirFilePath);
    });
  }

  deleteFolder(base);

  // console.log(dirFiles);

  function deleteFile (path: string, callback?:Function) {
    fs.unlink(path, (error: any) => {
      console.log(`${path} - file deleted`);
      if (error) {
        console.log(error);
      }

      if (callback) {
        callback();
      }
    });
  }

  function deleteFolder (path: string, callback?:Function) {
    fs.rmdir(path, (error: any) => {
      console.log(`${path} - folder deleted`);
      if (!error && callback) {
        callback();
      }
    });
  }
};

const readDir = (base: string, output: string) => {
  fs.readdirSync(base).forEach((element: string) => {
    const localElement: string = path.join(base, element);

    const state = fs.statSync(localElement);

    // console.log(state);

    if (state.isDirectory()) {
      readDir(localElement, output);
    } else {
      if (!fs.existsSync(output)) {
        fs.mkdirSync(output);
      }

      const fileName: string = path.basename(localElement);
      const fileFirstLetter: string = fileName[0].toLowerCase();

      const fileFolder: string = path.join(output, fileFirstLetter);

      if (!fs.existsSync(fileFolder)) {
        fs.mkdirSync(fileFolder);
      }

      fs.createReadStream(localElement).pipe(
        fs.createWriteStream(path.join(fileFolder, fileName))
      );
    }
  });
};

module.exports.deletePath = deletePath;
module.exports.readdirSync = readdirSync;

deletePath(sorted);
// readDir(base, sorted);
