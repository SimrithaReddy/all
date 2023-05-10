const fs = require("fs")
const http = require("http")

const server = http.createServer().on("request", (req, res) => {

  const wstream = fs.createWriteStream("index.html")
  wstream.write("<h1>Hello World</h1><p>This is Ravi</p>")
  wstream.end();

  const rstream = fs.createReadStream("index.html", { encoding: "utf8" })
  rstream.on("data", (chunk) => {
    res.write(chunk);
  })
  
  rstream.on("end", () => {
    res.end()
  })
}).listen(5000, () => console.log("Server is 5000"))