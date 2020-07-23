const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
        
        async login(req, res) {
            const { email, password } = req.body;

            try {
                const user = await User.findOne({ email });
                const match = await bcrypt.compare(password, user.passwordHash);

                if(match) {
                    const token = jwt.sign({
                        email: user.email,
                    }, 'shhhhh');
                    
                    return res.send(token);
                } else {
                    res.json(['The password is wrong!']);
                }
            } catch (error) {
                res.json(error);
            }
        }
    }
}