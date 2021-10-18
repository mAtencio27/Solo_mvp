import express from "express";
import cors from "cors";
import groceries from "./api/groceries.route.js"


const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/v1/groceries", groceries)
app.use("*", (req,res) => res.status(404).json({error:"not found"}))

export default app