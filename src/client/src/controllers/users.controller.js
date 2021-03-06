const usersCtrl = {};

const User = require('../models/User');

usersCtrl.getUsers    = async (req, res) => {
		const users   = await User.find();
		res.json(users);
}

usersCtrl.createUsers = async (req, res) => {
	const {username} = req.body;
	
	const newUser = new User({
		username: username
	})
	await newUser.save();
	console.log(newUser)
	res.json({ message: "User Saved"})
}

usersCtrl.getUser     = async (req, res) => {
	const user = await User.findById(req.params.id);
	res.json(user)
}

usersCtrl.updateUsers = async (req, res) => {
    const { username } = req.body;
	await User.findOneAndUpdate({_id: req.params.id}, {
		username: username
	})
	res.json({ message: "Users updated"})
}

usersCtrl.deleteUsers = async (req, res) => {
	await User.findByIdAndDelete(req.params.id);
	res.json({ message: "Users deleted"})
}

module.exports = usersCtrl;