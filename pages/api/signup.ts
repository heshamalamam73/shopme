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
                const user = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                });
                const newUser = await user.save();
                if (newUser) {
                    res.send({
                        _id: newUser._id,
                        name: newUser.name,
                        email: newUser.email,
                        isAdmin: newUser.isAdmin,
                        token: getToken(newUser),
                    });
                } else {
                    res.status(401).send({ msg: "invalid user data" });
                }
            } catch (error) {
                res.status(401).send({ msg: "invalid user data (email-name)" });
            }
            break;
        default :
            res.status(400).json({success: false});
            break;
    }
}