const correo = require("nodemailer");

class enviar_correo {
	constructor() {
        this.configuracion()
		this.correoRemitente = '"Universidad" <victorm.restrepoj@gmail.com>';
	}

	async configuracion() {
		this.transportador = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: "victorm.restrepoj@gmail.com",
				pass: "iskkrecuvkfllhnz"
			},
            tls: {
                rejectUnauthorized: false
            }
		});
	}
	async enviarMensaje(destinatario, asunto, cuerpo) {
        console.log("llega");
		await this.transportador.sendMail({
			from: this.correoRemitente,
			to: destinatario,
			subject: asunto,
			html: cuerpo,
		});
	}
}

module.exports = servicioDeCorreo;