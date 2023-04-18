const fs = require('fs')

fs.writeFile(
  'sample.txt',
  'Hello world, this is awesome!!',
  (err) => {
    if (err) throw err
    console.log('File created!')
  }
)

fs.readFile(
  'sample.txt', (err, data) => {
    if (err) throw err
    console.log(data.toString())
  }
)

fs.appendFile('sample.txt', 'This is the fs module!!',
  (err) => {
    if (err) throw err
    console.log('File appended!')
  })

fs.readFile(
  'sample.txt', (err, data) => {
    if (err) throw err
    console.log(data.toString())
  }
)

fs.rename('sample.txt', 'sample2.txt',
  (err) => {
    if (err) throw err
    console.log('Name changed!')
  })

fs.unlink('sample2.txt', (err) => {
  if (err) throw err
  console.log('File test.txt deleted successfully!')
})
