const express = require('express');

const AddressController = require('./controllers/AddressesController');
const UserController = require('./controllers/UserController');
const TechController = require('./controllers/TechController');

const routes = express.Router();

routes.post('/users', UserController.store )
routes.get('/users', UserController.index)



routes.get('/users/:user_id/addresses' , AddressController.index )
routes.post('/users/:user_id/addresses', AddressController.store);


routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);

export default routes;