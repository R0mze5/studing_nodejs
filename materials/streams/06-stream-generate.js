const fs = require('fs');

const Chance = require('chance');

const chance = new Chance();

const file = fs.createWriteStream('file-stream.txt');

// Write the data to the supplied writable stream one million times.
// Be attentive to back-pressure.
function generateCrazy () {
  while (chance.bool({ likehood: 95 })) {
    const isOver = file.write(chance.string({
      length: 16 * 1024
    }));

    if (!isOver) {
      // Had to stop early!
      // Write some more once it drains.

      console.log('drain!');
      return file.once('drain', generateCrazy);
    }
  }

  file.end(() => {
    console.log('End crazy string');
  });
}

generateCrazy();
