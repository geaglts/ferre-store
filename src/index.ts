import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

router(app);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("*", (req, res) => {
  res.status(404).json("404 Not Found");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
