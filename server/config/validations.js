const { body, validationResult, check } = require('express-validator');

const registerValidation = [
    body('email').isEmail().withMessage('Please enter a valid email address!'),
    check("password", "invalid password")
    .isLength({ min: 6 })
    .custom((value, { req }) => {
        if (value !== req.body.confirmPassword) {
            throw new Error("Passwords don't match");
        } else {
            return value;
        }
    })
];

const loginValidation = [
    body('email').isEmail().withMessage('Please enter a valid email address!'),
    body('password').isLength({ min: 6 }).withMessage('The password be at least 6 chars long.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({errors: errors.array()});
            
        next();   
    }
];

module.exports = {
    registerValidation,
    loginValidation,
};