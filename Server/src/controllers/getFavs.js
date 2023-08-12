const {Favorite}= require('../DB_connection');

const getFavs= async(req,res)=>{
    try{
        const allFav= await Favorite.findAll()
        return res.status(201).json(allFav)
    }catch(error){
        return res.status(500).json(error)
    }
}

module.exports= getFavs