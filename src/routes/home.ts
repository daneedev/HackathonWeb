import express from 'express';
const router = express.Router();

router.get("/", function (req, res) {
    res.render("index.html", {

    });
});

router.get("/charts", function (req, res) {
    res.render("charts.html", {
   
    });
});

export default router;