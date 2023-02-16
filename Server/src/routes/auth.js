const express = require("express")
import * as authController from ('../controllers/auth')

const router = express.Router();

router.post('/register',authController.register)

module.exports = router