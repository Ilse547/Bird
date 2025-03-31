const express = require("express");
const { logger } = require("./middleware/logger.js");
const app = express();
const port = 3000;

const cookies = [
  {name: "Chocolate Chip", slug: "chocolate-chip", stock: true},
  {name: "Banana", slug: "banana", stock: false}
]
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "./pages");
app.set("view engine", "ejs");

app.get('/', (request, response) => {
  const numberOfCookiesInStock = 40
  response.render('index', {
    nameOfThePage: "Cookieshop",
    numberOfCookiesInStock: numberOfCookiesInStock,
    numberOfCookiesSold: 3283
  })
})

app.get('/cookies', (request, response) => {
  response.render('cookies/index', {cookies:cookies})
})

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
