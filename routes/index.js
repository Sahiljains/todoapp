const express = require('express');
const app = express();
const router = express.Router();
const home_controller = require("../controller/home_controller");


router.post('/add',home_controller.add);
router.get('/delete',home_controller.delete);
router.get('/ok',home_controller.ok);


module.exports = router;