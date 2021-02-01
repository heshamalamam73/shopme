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
            try {
                let user = await User.findOne({
                    email : req.body.email
                });
                if(user){
                    let isMatch =await user.comparePassword(req.body.password);
                    if(isMatch){
                       const token = getToken(user)
                        res.status(200).json({success : true , data: user , token :token ,  })
                    }else {
                        res.status(400).json({success: false , message : "invalid email or password "});
                    }
                }else {
                    res.status(400).json({success: false , message : "invalid email or password "});
                }
            } catch (e) {
                res.status(400).json({success: false , message : e.message});
            }
            break;
        default :
            res.status(400).json({success: false})
            break;
    }
}
















