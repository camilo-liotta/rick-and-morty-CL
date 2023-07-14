const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = ( async (req, res) => {
    try {
            const {id} = req.params; 
            const { data } = await axios(`${URL+id}`);

            if( !data.name ) throw new Error(`Faltan datos del personaje con ID: ${id}`);

            const character = {
                id: id,
                status: data.status,
                name: data.name,
                species: data.species,
                origin: data.origin.name,
                image: data.image,
                gender: data.gender,
            }
            return res.json(character);
            
        }
        catch(error){
            return error.message.includes('ID')
            ? res.status(404).send(error.message)
            :  res.status(500).send(error.response.data.error)
        }
})


module.exports = getCharById;