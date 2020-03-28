const express = require('express');
const crypto = require('crypto');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const connection = require('./database/connection');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);
routes.post('/session', SessionController.create);

routes.get('/incident', IncidentController.index);
routes.post('/incident', IncidentController.create);
routes.delete('/incident/:id', IncidentController.delete);

module.exports = routes;