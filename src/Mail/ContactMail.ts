import { transport } from "./config";
import "dotenv/config"
import ejs from "ejs"
import path from "path";

const viewsFolder = path.join(__dirname, '../Views/Mail');

export class ContactMail {

    public static run() {
        ejs.renderFile(path.join(viewsFolder, 'contactMail.ejs'), {
            name: "Maria",
            email: "maria@mail.com",
            phone: "99999-9999",
            subject: "Olá gostaria de entrar em contato",
            message: "mensagem passada como variavel"
        }).then(mailview => {
            const mailResponse = transport.sendMail({
                from: `Node mail system <${process.env.MAIL_USER}>`,
                to: "Teste <alemassajr@hotmail.com>",
                subject: '[Node mail system] novo contato',
                html: mailview
            })
            return mailResponse;
        }).catch(err => {
            console.log(err)
        });
    }

}