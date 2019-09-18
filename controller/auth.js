const { SignInValidation} = require('../validation');
const jwt= require('jsonwebtoken');

exports.SignIn = async (req, res) => {
    
    const {email, password}= req.body;

    const user = await req.models.Users.findOne({ email: email });
    if (!user) return res.status(400).send('User does not exist');

    const ValidPassword = await bcrypt.compare(password, user.password);
    if (!ValidPassword) {
        return res.status(400).send('Invalid Password');
    }
    const token = await jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
    res.header('auth-token', token).send(token);
}