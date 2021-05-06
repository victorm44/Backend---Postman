const express = require('express')

const router = express.Router();

const _usuarios = require('../controllers/usuarios/usuarios');


router
    .get('/usuarios', _usuarios.getUsers)
    .post('/usuarios', _usuarios.createUsers)

module.exports = router;