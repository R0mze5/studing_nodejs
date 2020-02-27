// имеют смысл, если операция ввода-вывода происходит на протяжении некоторого времени

const fs = require('fs');

const ws = fs.createWriteStream('stream.txt', { encoding: 'utf8' });

ws.write('First \n');
ws.write('Second \n');
ws.end('End \n');

const rs = fs.createReadStream('stream.txt', { encoding: 'utf8' });

rs.on('data', data => console.log(data));
rs.on('end', () => console.log('EOF'));

// перенаправление данных из потока чтения в поток записи - процесс называется конвейером (piping)

const rs2 = fs.createReadStream('stream.txt', { encoding: 'utf8' });
const ws2 = fs.createWriteStream('stream-copy.txt', { encoding: 'utf8' });

rs2.pipe(ws2);
