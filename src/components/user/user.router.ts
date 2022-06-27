import { Router } from "express";

import validation from "@core/middlewares/validate.middleware";
import { createUser, readUser } from "./user.controller";
import createUserValidation from "./createUser.validation";

const router: Router = Router();

router.post("/user/", [validation(createUserValidation)], createUser);
router.get("/user/:id", readUser);

export default router;
