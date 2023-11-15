const {Favorite, User}= require('../DB_connection');

const getFavs= async(req,res)=>{
    try{
        const {user}= req.query
        const allFav= await Favorite.findAll(
            {include: User}
        )
        return res.status(201).json(allFav)
    }catch(error){
        return res.status(500).json(error)
    }
}

module.exports= getFavs