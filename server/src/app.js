import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(
    cors({
        // origin: "http://localhost:5173",
        origin: "https://portfolio-tree-dav-38b25b.netlify.app",
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

export default app;