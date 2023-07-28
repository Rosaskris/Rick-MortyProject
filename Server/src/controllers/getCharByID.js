const axios= require('axios')

const URL="https://rickandmortyapi.com/api/character"

const getCharById= async(req, res)=>{
    try{
    const {id}=(req.params)
    console.log(id);

    const {data}=await axios(`${URL}/${parseInt(id)}`)
    
        const {status, name, species, origin, image, gender}= data
        const character={id, status, name, species, origin, image, gender};
                
        if (character.name){
                return res.status(200).json(character)
            } else{
                return res.status(404).send('Not found')
                }
            
        
    }
    catch (err){
            return res.status(500).send(err.message)
        
    }

}





module.exports= getCharById