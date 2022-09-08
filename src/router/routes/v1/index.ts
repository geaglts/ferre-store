import { Router } from "express";
import toolsRoutes from "./tools";

const router = Router();

router.use("/tools", toolsRoutes);

export default router;
