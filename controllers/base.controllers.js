const { baseService } = require('../services/base.service')

function helthCheck(req, res) {
    try {
        const result = baseService(req.body);

        if (!result.success) {
            return res.status(result.status || 400).json({
                message: result.message || 'Something went wrong'
            })
        }

        return res.status(200).json({
            message: "Success"
        })
    }
    catch (e) {
        res.status(500).json({
            message: "Server Issue " + e
        })
    }
}

module.exports = {
    helthCheck
}