import { transport } from "./config";
import "dotenv/config"
import ejs from "ejs"
import path from "path";

const viewsFolder = path.join(__dirname,'../Views/Mail');

export class ContactMail {

    public static  run(){
        ejs.renderFile(path.join(viewsFolder , 'contactMail.ejs'),{
         message:"mensagem passada como variavel"
        }).then(mailview => {
            const mailResponse = transport.sendMail({
                from: `Node mail system <${process.env.MAIL_USER}>`,
                to: "Teste <alemassajr@gmail.com>",
                subject: '[Node mail system] novo contato',
                html:mailview
            })
            return mailResponse;
        }).catch(err =>{
            console.log(err)
        });
    }

}