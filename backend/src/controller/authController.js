import bcrypt from 'bcrypt';
import { findEmail } from '../models/user.js';
import { generate } from '../utils/token.js';

export const login = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) return res.status(400).json({message: 'Email dan password wajib diisi !'});

    const user = await findEmail(email);
    if(!user) return res.status(401).json({message: 'Email tidak ditemukan!'});

    const valid = await bcrypt.compare(password, user.password);
    if(!valid) return res.status(401).json({message: 'Password salah!'});

    const token = generate(user);
    // res.cookie("token", token, {httpOnly: "true", sameSite: "strict"});
    res.cookie("token", token, {
        httpOnly: true,
        secure: true, 
        sameSite: "None",
        maxAge: 24 * 60 * 60 * 1000, // 1 hari
    });

    res.json({message: "Login Berhasil"});
};

export const logout = (req, res) => {
    res.clearCookie("token");
    res.json({message: "Berhasil logout"});
};