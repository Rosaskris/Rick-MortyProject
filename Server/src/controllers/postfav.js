const {Favorite, User} = require('../DB_connection');

const postFav = async(req, res) => {

    console.log(req.body)
    try {
        const {id, email, name, origin, status, image, species, gender} = req.body
        if(![id, name, origin, status, image, species, gender].every(Boolean))
            return res.status(401).json({error:"Faltan Datos"})

        const favorite= await Favorite.findOrCreate({
            where: {
                id,
                name,
                status,
                species,
                gender,
                origin,
                image,
            },
        });
        const user= await User.findOne({where:{email}})
        await user.addFavorite(favorite.dataValues)
        const allFavs = await user.getFavorites()
        return res.status(200).json(allFavs)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports = postFav;