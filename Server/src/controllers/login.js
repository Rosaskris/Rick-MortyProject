const {email, password}= require('../utils/user')

const login=(req,res)=>{
    const {mail, pass}= req.query;

    if (email===mail && password===pass){
        return res.status(201).json({access:true})
    } else{
        return res.status(401).json({acess:false})
    }
}

module.exports= login