const {response} = require('express');



const usuariosGet = (req, res = response) => {
    //const query = req.query;
    const {q, nombre = "No name", apikey, page = 1, limit} = req.query;
    res.json({
        msg: 'GET API - Controlador',
        //query
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    //const {id} = req.params;

    res.json({
        msg: 'PUT API - Controlador',
        id
    });
}

const usuariosPost = (req, res = response) => {
    //const body = JSON.parse(req.body);
    //const body = req.body;
    const {nombre, edad} = req.body;

    res.json({
        msg: 'POST API - Controlador',
        //body: body
        nombre, edad
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'DELETE API - Controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete

}