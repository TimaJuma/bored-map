import { Router } from "express";

import activityController from "./activity.controller";

const router: Router = Router();

router.get("/activity", activityController);

export default router;
