const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("init")
})

module.exports = router;