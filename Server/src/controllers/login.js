const {User}= require('../DB_connection')

const login= async (req, res)=>{
    const{email, password}=req.query
    
    try{
        if(email && password){
            const userFound= await User.findOne({ where: {email} })
            if(userFound){
                if(password===userFound.dataValues.password){
                    res.status(201).json({access: true})
                } else{
                    res.status(402).json({message:'Wrong password'})
                }
            } else{
                res.status(404).json({message:'User not found'})
            }
        }
        else{
            res.status(400).json({message:'Missing information'})
        }
    }
    catch(error){
        res.status(500).json(error)
    }
}

module.exports= login