import Speech from '../../../models/speech';

export default {

    async index(req, res, next) {
        try {
            const speech = new Speech({
                record: req.body.data
            })
            await speech.save().then((speech) => {
                if(speech){
                    res.status(200).json({ msg: "successfully recored voice", data: speech}) 
                }
            })
            .catch((error) => {
                res.status(400).json({ msg: "didn't get any value" ,error})
            })
        } catch(error){
            res.status(400).json({ msg: "Something went wrong" , error})
        }
    },
};