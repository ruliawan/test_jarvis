import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const generate = (user) => {
    return jwt.sign({iduser: user.iduser, email: user.email}, process.env.JWT_SECRET, {expiresIn: "1h"});
};