import express from "express"; 
import { getMessage, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router(); 

router.post("/send/:id", protectRoute,sendMessage); //protect route function to check if there is the user 
router.get("/:id", protectRoute, getMessage);

export default router;