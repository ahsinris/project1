const router = require('express').Router()

const { helthCheck } = require('../controllers/base.controllers')

router.get('/', helthCheck)

module.exports = router