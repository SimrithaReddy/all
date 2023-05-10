const http = require("http")

let server = http.createServer((req, res) => {

    if (req.url = "/welcome") {
        return res.end("Welcome to Dominos")
    }

    else if (req.url = "/contact") {
        return res.writeHead(200).json({
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        }
        )
        
    }
    // else{
        
    // }

}).listen(8081, () => {
    console.log("server is up")
})