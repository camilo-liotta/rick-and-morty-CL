const http = require('http');
const data = require('./utils/data');

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');

    if(request.url.includes("/rickandmorty/character")) {
        let urlId = request.url.split('/').at(-1);
        const character = data.find(char => {
            return char.id === +urlId
        })

        response.writeHead(200, {"Content-type":"application/json"});
        return response.end(JSON.stringify(character));
        
    }

    return;

}).listen(3001, "localhost")