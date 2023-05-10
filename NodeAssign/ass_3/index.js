const fs = require("fs")
const http = require("http")

const server = http.createServer()
// fs.writeFileSync("index.html", "<h1>Hello World</h1><p>This is your Name</p>")

//   fs.readFile("index.html", (err, data) => {
//       res.writeHead(200, { "Content-type": "text/html" })
//       res.write(data)
//       res.end();

//   })

// })

server.on("request", (req, res) => {

  const wstream = fs.createWriteStream("index.html")
  wstream.write("<h1>Hello World</h1><p>This is your Name</p>")
  wstream.end();

  const rstream = fs.createReadStream("index.html", { encoding: "utf8" })

  rstream.on("data", (chunk) => {
    res.write(chunk);
  })


  rstream.on("end", () => {
    res.end()
  })
  
})


server.listen(3000, () => console.log("Server is up"))