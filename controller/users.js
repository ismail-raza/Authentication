const bcrypt = require('bcryptjs');

exports.RegiserUser = async (req, res) => {

    const {email, password, name, address}= req.body;

    const emailExist = await req.models.Users.findOne({ email: email });
    if (emailExist) return res.status(400).send('Email already exist');

    const salt = await bcrypt.genSalt(15);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new req.models.Users({
        email: email,
        password: hashedPassword,
        name: name,
        address: address
    });
    try {
        const SavedUser = await user.save();
        res.status(200).send({ user: user._id });
    } catch (error) {
        res.status(400).send(error);
    }
}


exports.Profile = async (req, res) => {
    
    const user = await User.findById({ _id: req.userId });
    if (!user) {
        return res.status(404).send('user not found');
    }
    res.status(200).send(user);
}
exports.Update = async (req, res) => {

        const {name, address}= req.body;

    const user = await req.models.Users.findByIdAndUpdate({ _id: req.userId, name: name, address: address });
    res.status(200).send(req.body);
}