import express from "express";
import {
  createUser,
  getUsers,
  getSingleUser,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
import { userValidation } from "../validations/userValidation.js";
import { validate } from "../middleware/validate.js";

const router = express.Router();

router.post("/user", userValidation, validate, createUser);
router.get("/users", getUsers);
router.get("/user/:id", getSingleUser);
router.delete("/user/:id", deleteUser);
router.patch("/user/:id", userValidation, validate, updateUser);

export default router;