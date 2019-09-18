const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if ((req.url=== '/auth/signIn') || (req.url==='/users/register')){
        next();
    }
    else{
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send('Access Denied!');
    }
    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        req.userId = verified.userId;
        next();
    } catch (error) {
        return res.status(401).send('Invalid Token');
    }
}
}