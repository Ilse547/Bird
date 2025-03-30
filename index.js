const express = require("express");
const { logger } = require("./middleware/logger.js");
const app = express();
const port = 3000;


app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use('/', express.static('public'));


app.get(/.*bird$/, (req, res) => {
  res.render("birds", { title: "Information about various birds" });
});

app.get('/cookies', (req, res) => {
  console.log(req.query);
  res.render("cookies", { message: 'Here you soon find all my cookies!' });
});

app.get("/welcome/:name", (req, res) => {
  const name = req.params.name;
  res.render("welcome", { name: name, message: `Welcome, ${name}! Hope you enjoy this simple dynamic backend routing` });
});



// Test area
const data = require("./data.json");
app.get("/data", (req, res) => {
  res.render("data", { title: data.title });
});

app.post('/contact', (req, res) => {
  console.log('Contact form submission: ', req.body);
  res.render("contact", { message: 'Thank you for your message. We will be in touch soon.' });
});

// Test end

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
