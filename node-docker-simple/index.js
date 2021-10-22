const express = require('express')

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Node Docker Simple web app')
})

app.listen(5000, () => {
  console.log(`Starting Express server at ${PORT}`)
})
