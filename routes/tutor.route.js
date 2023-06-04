const router = require('express').Router()

router.get('/tutors', function (req, res) {
    return res.status(200).json({
        message: 'Success'
    })
});

module.exports = router