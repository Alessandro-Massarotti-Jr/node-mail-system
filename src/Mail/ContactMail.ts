import { transport } from "./config";
import "dotenv/config"

export class ContactMail {

    public static  run(){
        const mailResponse = transport.sendMail({
            from: `Alessandro <${process.env.MAIL_USER}>`,
            to: "Mariana <contato.marigomes7@gmail.com>",
            subject: '[Node mail system]',
            text:'teste'
        })
        return mailResponse;
    }

}