import express from "express";
import { addUser, getAllUsers, getUserById } from "../services/user.service";
const router = express.Router();
router.post("/add", addUser);
router.get("/users", getAllUsers);
router.get("/:user_id", getUserById);
export default router;
