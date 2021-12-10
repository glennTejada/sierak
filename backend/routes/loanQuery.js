var express = require('express');
var router = express.Router();
const cors = require('cors');


const loanController = require('../controllers/loanquery.controller');
/* GET home page. */
router.post('/',loanController.validateLoan, loanController.loanQuery);



module.exports = router;
