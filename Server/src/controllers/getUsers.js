const {User} = require('../DB_connection');

const getUsers = async (req,res) => {
    try {
        const users= await User.findAll();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

module.exports= getUsers