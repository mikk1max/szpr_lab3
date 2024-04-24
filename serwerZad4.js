// http://localhost:3000/?year=2017&month=July&day=23

// const http = require('http')
// const url = require('url')
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     let q = url.parse(req.url, true).query
//     let txt = q.year + " " + q.month + " " + q.day
//     res.end(txt)
// }).listen(3000)

// 2017 July 23

// http://localhost:3000/?a=20&b=15&c=18
const http = require('http')
const url = require('url')
const port = 3000

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })

    // Parsing query parameters
    let q = url.parse(req.url, true).query
    let a = parseInt(q.a)
    let b = parseInt(q.b)
    let c = parseInt(q.c)

    // Calculating perimeter
    let perimeter = (a + b + c) / 2

    // Check if all parameters are valid numbers
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(perimeter)) {
        res.end("Invalid input. Please provide valid numbers for a, b, and c.")
        return
    }

    // Check if a triangle can be constructed
    if (a + b <= c || a + c <= b || b + c <= a) {
        res.end("The provided side lengths do not form a valid triangle.")
        return
    }



    // Sending the result
    res.end("P = " + perimeter.toString())
}).listen(port, () => console.log(`Server działa na porcie ${port}; ` + 'naciśnij Ctrl+C, aby zakończyć'))

