"use strict";

// 1. Load the core 'http' module
const http = require("http");

// 2. Define the hostname and port
const hostname = "127.0.0.1"; // Localhost
const port = 3000;

// 3. Create the Server
// The callback runs EVERY time a request hits the server
const server = http.createServer((req, res) => {
  // A. Set the status (200 OK)
  res.statusCode = 200;

  // B. Set the Content-Type header
  // "text/plain" means we are sending simple text, not HTML
  res.setHeader("Content-Type", "text/plain");

  // C. Send the body and close the connection
  res.end("Hello Node Server!");
});

// 4. Start listening
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});