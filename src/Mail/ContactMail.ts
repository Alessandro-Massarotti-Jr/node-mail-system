import { transport } from "./config";
import "dotenv/config"
import ejs from "ejs"
import path from "path";

const viewsFolder = path.join(__dirname, '../../Resources/Views/Mail');

export interface ContactMailInterface {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export class ContactMail {

    public static run(contactMail:ContactMailInterface) {
        console.log("<---------------------------------------->");
        console.log(process.env.MAIL_USER);
        console.log(process.env.MAIL_HOST);
        console.log(process.env.MAIL_PORT);
        console.log(process.env.MAIL_PASS);
        console.log("<---------------------------------------->");
        ejs.renderFile(path.join(viewsFolder, 'contactMail.ejs'), {
            name: contactMail.name,
            email: contactMail.email,
            phone: contactMail.phone,
            subject: contactMail.subject,
            message: contactMail.message
        }).then(mailview => {
            const mailResponse = transport.sendMail({
                from: `Node mail system <${process.env.MAIL_USER}>`,
                to: `Alessandro Hotmail <alemassajr@hotmail.com> , Alessandro gmail <alemassajr@gmail.com> , ${contactMail.name} <${contactMail.email}>`,
                subject: '[Node mail system] novo contato',
                html: mailview
            })
            return mailResponse;
        }).catch(err => {
            console.log(err)
        });
    }

}