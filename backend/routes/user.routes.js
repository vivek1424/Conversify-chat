import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router() ; 

router.get("/",protectRoute, getUsersForSidebar)  //protectROute will ensure that unauthenticated users can use this 
export default router; 