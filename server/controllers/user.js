const argon2 = require('argon2');
const User = require('../models/user');
const { createToken } = require('../utils/user');

exports.login = async (req, res) => {
    let user;
    user = await User.findOne({ username: req.body.username });

    if (user == null) {
        user = await User.findOne({ email: req.body.username });

        if (user == null) {
            res.json({ 
                token: '',
                error: true
            });

            return;
        }
    }

    const isValid = await argon2.verify(user.password, req.body.password);
    if (!isValid) {
        res.json({ 
            token: '',
            error: true
        });
        return;
    }

    const token = createToken(user._id);

    res.json({ 
        token,
        error: false
    });
};

exports.register = async (req, res) => {
    const hasUsername = await User.findOne({ username: req.body.username });
    const hasEmail = await User.findOne({ email: req.body.email });

    if (hasUsername !== null) {
        res.json({ message: 'username taken' });
    } 

    else if (hasEmail !== null) {
        res.json({ message: "email is already in use" });
    } 

    else {
        const hashedPassword = await argon2.hash(req.body.password);

        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword,
            isAdmin: false,
            enabled: false
        });
    
        await user.save();
        
        res.json({ message: 'user created'});
    }
};

exports.deleteUser = async (req, res) => {
    await User.deleteOne({ _id: req.params.userId });
    res.json({ message: 'User has been deleted.' })
};