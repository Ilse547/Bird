const express = require("express")
const app = express()
const port = 3000

// the "./" look in the current folder how to tell node the difference between a module you install and 
const data = require("./data.json");


app.use('/', express.static('public'))

  app.get(/.*bird$/, (req, res) => {
    res.send("Information about various birds");
  });



  app.get("/birds/:birdname", (req, res) => {
    const bird = req.params.birdname;
    res.send(`Looking at a page about the bird: ${bird}`)
  })

  app.get("/welcome/:name", (req, res) => {
    const name = req.params.name;
    res.send(`Welcome, ${name}! Hope you enjoy this simple dynamic backend routing`);
  });

  app.get("/data", (req, res) => {
    res.send (`the product is <strong>${data.title}</strong>`)
  });
  




app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`)
})