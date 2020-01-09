const http = require("http");

const fs = require("fs");
const path = require("path");

const server = http.createServer((request, response) => {
  let filepath = path.join(
    __dirname,
    "public",
    request.url === "/" ? "index.html" : request.url
  );

  const ext = path.extname(filepath);

  let contentType = "text/html";

  if (!ext) {
    filepath += ".html";
  } else {
    switch (ext) {
      case ".css":
        contentType = "text/css";
        break;
      case ".js":
        contentType = "text/javascript";
        break;

      default:
        break;
    }
  }

  // console.log(filepath);

  fs.readFile(filepath, (err, data) => {
    if (err) {
      // throw err;
      response.writeHead(500, {
        "Contentent-type": "text/html"
      });

      response.end("<h1>error</h1>");
    } else {
      response.writeHead(200, {
        // "Contentent-type": "text/plain" // текст- - теги не парсятся
        "Content-Type": contentType
      });

      response.end(data);
    }
  });
});

const PORT = process.env.PORT || 3000;

console.log(process.env.PORT);

server.listen(PORT, () => {
  console.log(`server has been started on ${PORT} ...`);
});
