const correo = require("nodemailer");

class enviar_correo {
	constructor() {
        this.configuracion()
		this.correoRemitente = '"Universidad" <sebasbasebase@gmail.com>';
	}

	async configuracion() {
		this.transportador = correo.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: "sebasbasebase@gmail.com",
				pass: "zmvhsodiuvstgkwf"
			},
            tls: {
                rejectUnauthorized: false
            }
		});
	}
	async enviarMensaje(destinatario, asunto, cuerpo) {
        console.log("exito");
		await this.transportador.sendMail({
			from: this.correoRemitente,
			to: destinatario,
			subject: asunto,
			html: cuerpo,
		});
	}
}

module.exports = enviar_correo;