import http from "http";
import fs from "fs/promises";
import path from "path";

const server = http.createServer();

server.on("request", async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  // sending json object
  const users = {
    firstName: "Robin",
    lastName: "Mahto",
    age: 27,
  };

  // sending html
  const htmlFile = await fs.readdir("./public");

  htmlFile.forEach(async (file) => {
    const filePath = path.join("./public", file);
    const stats = await fs.stat(filePath);
    
  });

  res.end(JSON.stringify(users));
});

server.listen(5000, "localhost", () => {
  console.log("server started on 5000 port successfully");
});
