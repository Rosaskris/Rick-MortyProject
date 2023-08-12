const {User}= require('../DB_connection')


const postUSer= async(req,res)=>{
    const {email, password}= req.body
    try {
        if (email && password) {
            const [userCreated, created] = await User.findOrCreate({
                where: { email }, 
                defaults: { password },
            });

            if (created) {
                res.status(201).json(userCreated);
            } else {
                res.status(200).json(userCreated);
            }
        } else {
            res.status(400).json({ message: 'Missing information' });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};
    



module.exports=postUSer