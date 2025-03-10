const express = require("express")
const app = express()
const port = 3000

  app.get("/", (req, res) => {
  res.send("Bird homepage")
  })

  app.get("/.*bird$/", (req, res) => {
  express.static("About Birds")

  })



  app.get("/birds/:birdname", (req, res) => {
    const bird = req.params.birdname;
    res.send(`Looking at a page about the bird: ${bird}`)
  })

  app.get("/welcome/:name", (req, res) => {
    const name = req.params.name;
    res.send(`Welcome, ${name}! Hope you enjoy this simple dynamic backend routing`);
  });
  



app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`)
})