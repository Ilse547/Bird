const express = require("express");
const { logger } = require("./middleware/logger.js");
const app = express();
const port = 3000;


app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "./pages");
app.set("view engine", "ejs");

app.get('/', (request, response) => {
  const numberOfCookiesInStock = 45
  response.render('index', {numberOfCookiesInStock: numberOfCookiesInStock})
});


app.get("/welcome/:name", (req, res) => {
  const name = req.params.name;
  res.render("welcome", { name: name, message: `Welcome, ${name}! Hope you enjoy this simple dynamic backend routing` });
});



// Test area
app.get("/htmlres", (req, res) => {
  res.send(`<h1>HTML Response</h1>`)
})

app.post('/contact', (req, res) => {
  console.log('Contact form submission: ', req.body);
  res.render("contact", { message: 'Thank you for your message. We will be in touch soon.' });
});

// Test end

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
