const axios= require('axios')

const URL="https://rickandmortyapi.com/api/character"

const getCharById=(req, res)=>{
    const {id}=(req.params)
    console.log(id);

    axios(`${URL}/${parseInt(id)}`)
    .then(
        (({data})=>{
            const {status, name, species, origin, image, gender}= data
            const character={id, status, name, species, origin, image, gender};
            
            if (character.name){
                return res.status(200).json(character)
            } else{
                return res.status(404).send('Not found')
            }
        })
    )
    .catch(err=>{
        return res.status(500).send(err.message)
    })

}





module.exports= getCharById