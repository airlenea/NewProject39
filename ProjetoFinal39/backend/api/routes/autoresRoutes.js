const controller = require('../controllers/autoresControllers.js');

//server.get('/autores', controller.autoresMenu)

server.get('/autores', controller.autoresGetAll)
server.get('/autores/:codigo', controller.autoresGetById)

server.put('/autores/ativoInativo/:codigo', controller.autoresAtivoInativo)

server.put('/autores/:codigo', controller.autoresEditar)
server.post('/autores', controller.autoresNovo)

