import { Request, Response } from "express";
import { ContactMail } from "../Mail/ContactMail";

export class ContactController{

    public static sendMail(req:Request,res:Response){

        const contactMailData = req.body;

        const teste = ContactMail.run(contactMailData);
        return res.status(200).json({mail:"send"});
    }

}