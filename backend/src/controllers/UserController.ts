import { Request, Response} from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Vitor', email: 'contato@vitor.com.br'},
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();
        emailService.sendMail({
            to: {
                 name:'Vitor Plentz', 
                 email: 'contato@vitor.com.br'
                },
            message: { 
                subject: 'Welcome to the system!', 
                body: 'Welcome!'
            }
    });

    return res.send();
    }

};