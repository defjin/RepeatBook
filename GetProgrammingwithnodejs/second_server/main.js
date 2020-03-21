const http = require('http')
const httpStatus = require('http-status-codes')
const port = 3000

const getJSONString = (obj) => {
    return JSON.stringify(obj,null,2)
}

const app = http.createServer()
app.on("request", (req,res) => {
    console.log(getJSONString(req.method))
    console.log(getJSONString(req.url))
    console.log(getJSONString(req.header))
    res.writeHead(httpStatus.OK, {
        "Content-Type" : "text/html"
    })
    let responseMessage = "hello"
    res.end(responseMessage)
})

app.listen(port)
console.log(`server has started and is listening on port number ${port}`);
