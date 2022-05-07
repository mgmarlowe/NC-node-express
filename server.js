const express = require("express");

const hostname = "localhost";
const port = 3000;

const app = express();

app.use((req, res) => {
  console.log(req.header);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}:${port}`);
});