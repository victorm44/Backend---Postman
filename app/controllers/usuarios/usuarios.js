const PostgresService = require("../../services/postgres.service");
const _pg = new PostgresService();
const enviar_correo = require("../../services/correo");

const getUsers = async (req, res) => {
    let sql = "select * from personas";
    try {
        let result = await _pg.executeSql(sql);
        let rows = result.rows;
        return res.send(rows);
    } catch (error) {
        return res.send("error")
    }
};

const createUsers = async (req, res) => {
    try {
        let user = req.body;
        let sql = `INSERT INTO public.personas("name", email) VALUES('${user.name}','${user.email}');`;
        let datos = [user.name, user.email];
        let result = await _pg.executeSql2(sql, datos);

        if (result.rowCount == 1) {
            let asunto = "Bienvenido";
            let cuerpo = `<h1> Hola  ${user.name} bienvenid@ a la universidad </h1>`;
            const _nodemailer = new enviar_correo();
            await _nodemailer.enviarMensaje(user.email, asunto, cuerpo);
        }
        let result = await _pg.executeSql(sql);
        console.log(result);
        return res.send({
            ok: result.rowCount == 1,
            message: result.row == 1 ? "Usuario creado" : "EL usuario no fue creado",
            content: user,
        });
    } catch (error) {
        return res.send({
            ok: false,
            message: "error",
            content: error
        });
    }

};

module.exports = { getUsers, createUsers };