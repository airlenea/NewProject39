const controllerIndex = require("../controllers/indexControllers.js");

server.get("/", controllerIndex.indexControllers);

//server.get('*', controllerIndex.notFoundControllers)
