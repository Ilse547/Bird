import { request, Router } from 'express'
import path from 'path';
const router = Router()

router.get("/welcome", (req, res) => {
    res.sendFile(path.resolve("public/welcome.html"))
})

router.get("/welcome/:name", (req, res) => {
    const name = req.params.name;
    res.render("welcome", { name: name, message: `Welcome, ${name}! Hope you enjoy this simple dynamic backend routing` });
});
router.get("/birds", (req, res) => {
    res.redirect("/")
})

export default router