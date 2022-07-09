const jwt = require('jsonwebtoken');

exports.createToken = (userId) => {
    const tokenSecret = process.env.TOKEN_SECRET;
    const token = jwt.sign({ userId }, tokenSecret, { expiresIn: '3d' });

    return token;
}