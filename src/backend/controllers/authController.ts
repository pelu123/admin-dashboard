import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db/db";
import {v4 as uuidv4} from "uuid";
import { User } from "../types";

const SECRET = 'jwt_secret';

export const register = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;

    await db.read();
    const userExists = db.data?.users.find((user) => user.email === email);
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: User = {
        id: uuidv4(),
        email,
        password: hashedPassword,
    }

    db.data?.users.push(newUser);
    await db.write();

    return res.status(201).json({ message: "User created successfully" });
}

export const login = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;

    await db.read();
    const user = db.data?.users.find((user) => user.email === email);
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: "1h" });
    return res.json({ token, email: user.email })
}