const http = require("http");
const querystring = require("querystring")



const server = http.createServer((req, res) => {

    const url = req.url.split("?")[0]
    const qparams = querystring.parse(req.url.split("?")[1])
    console.log(qparams);
    console.log(url)

    switch (url) {
        case "/":
            res.writeHead(200, { "Content-type": "text/html" })
            // res.write("<h1> Welcome to Nodejs </h1>")
            res.end("<h1> Welcome to Nodejs </h1>");
            break;
        case "/home":
            res.writeHead(200, { "Content-type": "text/html" })
            res.write("<h1> Welcome to Nodejs Home </h1>") 
            res.end(); 
            break;
        case "/about":
            res.writeHead(200, { "Content-type": "text/json" })
            res.write(JSON.stringify({
                name: qparams.name?qparams.name:"KuppiReddy Simritha Reddy",
                batch: qparams.batch,
                currentbatch: qparams.currentbatch
            }))
            res.end();
            break;
        default:
            res.writeHead(404, { "Content-type": "text/html" })
            res.write("<h1>Page not Found</h1>");
            res.end();
            break;
    }
})

server.listen(5000, () => {
    console.log("The server is up at, port 5000")
})


 // res.write is used to wirte for dynamic content
 //else we can write that static in res.end() only