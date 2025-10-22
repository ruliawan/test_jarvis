import db from "../config/db.js";

export const findEmail = async (email) => {
    const [row] = await db.query("SELECT * FROM user WHERE email = ?", [email]);
    return row[0];
};

export const createUser = async (email, password) => {
    await db.query("INSERT INTO user (email, password) VALUES (?,?)", [email, password]);
};