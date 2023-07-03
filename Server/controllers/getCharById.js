const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
    axios(`${URL+req.params.id}`)
    .then(response => response.data)
    .then(
        data => {
            if(data.name){
                const character = {
                    id: data.id,
                    status: data.status,
                    name: data.name,
                    species: data.species,
                    origin: data.origin.name,
                    image: data.image,
                    gender: data.gender,
                }
                return res.json(character);
            }
            return res.status(404),send('Not found');
        }
    )
    .catch(error => { return res.status(500).send(error); })
}


module.exports = getCharById;







// const getCharById = (res, id) => {

//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then( response => response.data )
//     .then(
//         (data) => {
//             const character = {
//                 id,
//                 name: data.name,
//                 gender: data.gender,
//                 species: data.species,
//                 origin: data.origin.name,
//                 image: data.image,
//                 status: data.status,
//             }
//             return res
//                     .writeHead(200, {"Content-type":"application/json"})
//                     .end(JSON.stringify(character));
//         }
//     )
//     .catch(
//         (error) => {
//                 return res
//                         .writeHead(500, {"Content-type":"text/plain"})
//                         .end(error.message);
//             }
//         )
// }
// module.exports = {getCharById};