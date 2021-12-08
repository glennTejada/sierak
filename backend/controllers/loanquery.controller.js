const db = require('../models')

const Loaninquery = db.loaninqury

exports.loanQuery = (req, res)=>{
    let info = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        province: req.body.province,
        house_value: req.body.house_value,
        owing_against: req.body.owing_against,
        amount_requested: req.body.amount_requested
    }

    Loaninquery.create(info)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    })
    // res.json(req.body.name)
    console.log(req.body)
}

const {check, validationResult} = require('express-validator');

exports.validateLoan = [
  check('email')
    .notEmpty().withMessage('email is requried')
    .trim()
    .normalizeEmail()
    .not()
    .isEmail()
    .withMessage('Invalid email address!')
    .bail(),
  check('phone').notEmpty().withMessage('phone number requried'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
];