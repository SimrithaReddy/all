var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    console.log(req.url)
    if (req.url == "/welcome") {
        res.writeHead("200", { "Content-type": "text/plain" })
        res.end("Welcome to Dominos!")
    }else if (req.url == "/contact") {
        res.writeHead("200", { "Content-type": "application/json" })
        res.end(JSON.stringify({  
            phone: '18602100000', 
            email: 'guestcaredominos@jublfood.com' 
           }
           ))
    }else{
        res.writeHead("404", { "Content-type": "text/plain" })
        res.end("Page Not found")
    }
}

httpServer.listen(8081,console.log("server is up at 8081"))

module.exports = httpServer;