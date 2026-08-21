import { registerUser, loginUser } from "../services/authService.js";
import generateToken from "../utils/generateToken.js";

const setAuthCookie = (res, token) => {
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
};

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body ?? {};

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "name, email, and password are required",
            });
        }

        const user = await registerUser({
            name,
            email,
            password,
        });
        const token = generateToken(user._id);
        setAuthCookie(res, token);

        res.status(201).json({
            message: "Registration successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });

    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await loginUser({email,password,});
        const token = generateToken(user._id);
        setAuthCookie(res, token);

        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });

    } catch (error) {
        res.status(401).json({
            message: error.message,
        });
    }
};

export const getCurrentUser = async (req, res) => {
    res.status(200).json({
        user: {
            id: req.user._id,
            name: req.user.name,
            email: req.user.email,
        }
    });
};