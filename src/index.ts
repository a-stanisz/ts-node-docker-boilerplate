import http from "http";

const PORT = process.env.PORT || 8080;

const requestListener = (___, res) => {
  res.writeHead(200);
  res.end("Hello!");
};

const server = http.createServer(requestListener);
server.listen(PORT);
