const http = require('http')
const fs = require('fs')

const port = 3000

function serveStaticFile(res, path, contentType, responseCode = 200) {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            return res.end('500 - Blad wewnetrzny')
        }
        res.writeHead(responseCode, { 'Content-Type': contentType })
        res.end(data)
    })
}

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            serveStaticFile(res, 'public/home.html', 'text/html')
            break
        case '/about':
            serveStaticFile(res, 'public/about.html', 'text/html')
            break
        case '/image':
            serveStaticFile(res, 'public/img/logo.jpeg', 'image/jpeg')
            break
        default:
            serveStaticFile(res, 'public/404.html', 'text/html', 404)
            break
    }
})

server.listen(port, () => console.log(`Server działa na porcie ${port}; ` + 'naciśnij Ctrl+C, aby zakończyć'))
