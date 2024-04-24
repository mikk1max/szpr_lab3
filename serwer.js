const http = require('http')
function process_request(req, res) {
    const body = 'Witaj na platformie Node!\n'
    const content_length = body.length
    res.writeHead(200, {
        'Content-Length': content_length,
        'Content-Type': 'text/plain'
    });
    res.end(body)
}
const server = http.createServer(process_request)
server.listen(3000, () => console.log('Serwer działa!'))