const Hapi = require('@hapi/hapi');
const routes = require('./routes.cjs');

const init = async () =>{
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });
    try{
        server.route(routes);
    } catch(e){
        console.log(e.message);
    }

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();