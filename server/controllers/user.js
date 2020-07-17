const { body, validationResult } = require('express-validator');

module.exports = {
    post: {
        register(req, res) {
            const errors = validationResult(req);

            res.json({ errors: errors.errors });
        },
        
        login(req, res) {
            // TODO
        }
    }
}