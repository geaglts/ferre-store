import { Application } from "express";
import v1API from "./routes/v1";

export default (app: Application) => {
  app.use("/api/v1", v1API);
};
