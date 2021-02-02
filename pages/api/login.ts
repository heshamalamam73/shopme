import dbConnect from '../../utils/dbConnect'
import User from '../../models/User'
import {getToken} from '../../utils/userAuth'
dbConnect();

export default async (req, res) => {
    const {
        query :{id},
        method
    } = req;
    switch (method) {
        case "POST" :
            if(!req.body.password || !req.body.email){
                res.status(400).json({success:false , message : "the email and the password are required" })
                return;
            }
            let user = await User.findOne({
                email: req.body.email,
            });
            let isMatch = await user.comparePassword(req.body.password);
            if (isMatch) {
                res.send({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: getToken(user),
                });
            } else {
                res.status(401).send({ message: "invalid Email or Password" });
            }
            break;
        default :
            res.status(400).json({success: false})
            break;
    }
}
















