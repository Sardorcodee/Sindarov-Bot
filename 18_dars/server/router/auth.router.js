const { Router } = require('express');
const { register, login } = require("../ctr/auth.ctr")


const router = Router();



router.post("/register", register)

router.post("/login", login)


module.exports = router;