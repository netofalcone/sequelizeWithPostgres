import express from 'express';

import UserController from './controllers/UserController';
import TechController from './controllers/TechController';
import AddressController from './controllers/AddressController';
import ReportController from './controllers/ReportController';

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.store);

routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);
routes.delete('/users/:user_id/techs', TechController.delete);

routes.get('/report', ReportController.show);

export default routes;