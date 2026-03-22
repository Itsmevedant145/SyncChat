import { 
    Router
} from "express";
import { getMe } from "../controllers/authControllers";
import { protectRoute } from "../middleware/auth";
const authRoutes = Router();
authRoutes.get("/me", protectRoute, getMe);
authRoutes.post("/callback", authCallback);
export default authRoutes;