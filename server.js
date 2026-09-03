import http from "http";
import fs from "fs/promises";

const server = http.createServer();

server.on("request", async(req, res) => {
  res.setHeader("Content-Type", "application/json");

  // sending json object
  const users = {
    firstName: "Robin",
    lastName: "Mahto",
    age: 27,
  };

  // sending html
  const htmlFile = await fs.readdir('./public');
  console.log(htmlFile);

  res.end(JSON.stringify(users));
});

server.listen(5000, "localhost", () => {
  console.log("server started on 5000 port successfully");
});
