import * as functions from "firebase-functions";
import * as jwt from "jsonwebtoken";
import { getUserDataDB } from "../utils/firestore";
import { User } from "../models/user";
import { checkIsPasswordValid } from "../utils/bcrypt";

const config = functions.config();

export const getUser = functions.https.onRequest(async (request, response) => {
    try {
        const { username, password } = request.query;
        const foundUser: User = await getUserDataDB(username);
        if (foundUser) {
            if (await checkIsPasswordValid(password, foundUser.password)) {
                const token: string = jwt.sign(
                    { username: foundUser.username },
                    config.poker.apikey,
                    {
                        issuer: config.poker.appid,
                        expiresIn: config.poker.tokentimelimit,
                        subject: config.poker.tokensubject
                    }
                );
                response.status(200).set('Authorization', 'Bearer ' + token).send({ user: foundUser, success: true });
            }
        }
        response.send({ msg: `Invalid username or password..`, success: false });
    } catch (error) {
        response.status(500).send({ msg: `Server error...`, success: false });
    }
});
