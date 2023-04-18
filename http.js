const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  fs.readFile('sample2.txt', (err, data) => {
    res.end(data)
    if (err) throw err
    console.log('error')
  })
//   const stream = fs.createReadStream('sample2.txt')
//   stream.pipe()
})

server.listen(3000)
