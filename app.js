const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World Express!')
})

app.listen(port, () => {
  console.log(`Server run http://localhost:${port}`)
})