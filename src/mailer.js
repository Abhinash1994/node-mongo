import nodemailer from 'nodemailer';
import config from './config';
import User from './models/user';


export default {
    sendEmployeePassword: async(email) => {
            try{
                User.findOne({where: {email: email}})
                .then(async(user) => {
                    if(!user){
                        var smtpTransport = nodemailer.createTransport({
                            host: process.env.MAIL_HOST,
                            port: process.env.MAIL_PORT,
                            auth: {
                                user: process.env.MAIL_USERNAME,
                                pass: process.env.MAIL_PASSWORD
                            },
                            tls: {rejectUnauthorized: false},
                        });
                        await smtpTransport.sendMail({
                            from: process.env.MAIL_USERNAME,
                            to: email,
                            subject: 'Grocery bloggin website',
                            html: "Click on this link to verify your Email"
                        }, function(error, info){
                            if(error){
                                console.log(error)
                            }else{
                                console.log("email has been sent",info.response)
                            }
                        });
                    }else throw {
                        name: "Groffers Exception",
                        msg: 'Email Body not available'
                    }
                })
            }catch(err){
                reject(err);
            }
    } 

}
