

const login=(req,res)=>{
    const {email, password}= req.query;

    if ('prueba@mail.com'===email && 'pass123'===password){
        return res.status(201).json({access:true})
    } else{
        return res.status(401).json({acess:false})
    }
}

module.exports= login