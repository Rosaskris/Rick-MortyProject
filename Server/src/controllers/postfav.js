const {Favorite}= require('../DB_connection')

const postFav= async (req,res)=>{
    try {
        const { id, name, origin, status, image, species, gender } = req.body;
    
        if (!id || !name || !origin || !status || !image || !species || !gender)
            return res.status(401).json({ error: 'Faltan datos' });
    
        await Favorite.findOrCreate({
            where: { id, name, status, species, gender, origin, image },
        });
    
        const allFavorites = await Favorite.findAll();
        return res.status(201).json(allFavorites);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}

module.exports= postFav