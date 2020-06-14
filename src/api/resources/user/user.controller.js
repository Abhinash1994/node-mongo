import User from '../../../models/user';

export default {

    async index(req, res, next) {
        try {
            User.find()
            .then((user)=>{
                res.status(200).send({ message:"successful", data: user})
            })
        } catch (error) {
            res.status(400).send(error)
        }
    },

    async register(req, res, next) {
        //Login a registered user
        try {
            const { firstName , lastName, email , password } = req.body
            console.log(req.body)
            const user = new User({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
            await user.save().then((user) => {
                if(user){
                    res.status(200).json({ msg: "successfully", data: user})
                    
                }
            })
            .catch((error) => {
                res.status(400).json({ msg: "already registered email" ,error})
            })
        } catch (error) {
            res.status(400).json({ msg: "Already registered email"})
        }
    },

};