const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
    post: {
        async register(req, res) {
            const { email, password } = req.body;
            
            try {
                const salt = await bcrypt.genSalt(10);
                const passwordHash = await bcrypt.hash(password, salt);
                
                const result = await User.create({
                    email,
                    passwordHash
                });
                
                res.json(result);
            } catch (error) {
                res.json(error);
            }
        },
        
        login(req, res) {
            // TODO
        }
    }
}