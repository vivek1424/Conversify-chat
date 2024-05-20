import express from "express"
import { login, logout, signup } from "../controllers/auth.controller.js";

const router= express.Router(); 

router.post("/login", login)

router.post("/signup", signup)

router.post("/logout", logout)
export default router;

//each route could get lots of lines of codes, so make controller for that and then import them here