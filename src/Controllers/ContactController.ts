import { Request, Response } from "express";
import { ContactMail } from "../Mail/ContactMail";

export class ContactController{

    public static sendMail(req:Request,res:Response){
        const teste = ContactMail.run();
        return res.status(200).json({mail:"send"});
    }

}