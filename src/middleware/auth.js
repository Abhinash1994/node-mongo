import User from '../models/user';
import jwt from 'jsonwebtoken';

const auth = async (req,res,next) =>{
    try{
        const token = req.header('Authorization').replace('Bearer ','');
        const decoded = jwt.verify(token,'autosect');
        const user = User.find({ _id:decoded._id ,'tokens.token':token })
        if(!user){
            throw new Error();
        }
        req.user = user
        next()
    }
    catch(e){
        res.status(201).send({ error: "please authenticate" });
    }
}
module.exports = auth