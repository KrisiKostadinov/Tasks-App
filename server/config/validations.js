const { body, validationResult, check } = require('express-validator');

const registerValidation = [
    body('email').isEmail().withMessage('Please enter a valid email address!'),
    body('password').isLength({ min: 6 }).withMessage('The password be at least 6 chars long.'),
    (req, res, next) => {
        const result = validationResult(req);
        let errors = [];

        if(req.body.password !== req.body.confirmPassword) {
            errors = readErrors(result);
            errors.push('The passwords not match.');
        }

        if (errors.length > 0) {
            return res.status(422).json(errors);
        }
            
        next();   
    }
];

const loginValidation = [
    body('email').isEmail().withMessage('Please enter a valid email address!'),
    body('password').isLength({ min: 6 }).withMessage('The password be at least 6 chars long.'),
    (req, res, next) => {
        const result = validationResult(req);
        let errors = readErrors(result);

        if (errors.length > 0) {
            return res.status(422).json(errors);
        }
            
        next();   
    }
];

function readErrors(result) {
    let errors = [];
    result.errors.forEach(error => {
        errors.push(error.msg);
    });

    return errors;
}

module.exports = {
    registerValidation,
    loginValidation,
};