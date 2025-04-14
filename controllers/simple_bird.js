import { Router } from 'express'
const router = Router()
router.get("/welcome/:name", (req, res) => {
    const name = req.params.name;
    res.render("welcome", { name: name, message: `Welcome, ${name}! Hope you enjoy this simple dynamic backend routing` });
});

export default router