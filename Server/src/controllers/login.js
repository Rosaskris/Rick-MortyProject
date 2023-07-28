const data= require('../utils/user')

const login=(req,res)=>{
    const {email, password}= req.query;

    if (email===data[0].mail && password===data[0].pass){
        return res.status(201).json({access:true})
    }else {
        return res.status(401).json({access:false})
    }
}

module.exports= login