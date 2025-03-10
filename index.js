const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Bird homepage')
})

app.get('/.*bird$/', (req, res) => {
  express.static("About Birds")

  })



  app.get('/users/:birdname', (req, res) => {
    res.send(req.params)
  })

  app.route('/bird')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})