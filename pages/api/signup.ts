import User from "../../models/User";
import {getToken} from "../../utils/userAuth";
import dbConnect from '../../utils/dbConnect'
dbConnect();

export default async (req, res) => {
    const {
        query: {id},
        method
    } = req;
    switch (method) {
        case "POST" :
            try {
                const user = await User.create(req.body);
                if (user) {
                    res.status(201).json({success: true, data: user, token: getToken(user)})
                } else {
                    res.status(400).json({success: false, message: "invalid Email / username "})
                }
            } catch (error) {
                res.status(400).json({success: false, message: error.message});
            }
            break;
        default :
            res.status(400).json({success: false});
            break;
    }
}