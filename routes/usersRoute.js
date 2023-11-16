import exppress from "express";
import {
  registerUserCtrl,
  loginUserCtrl,
  getUserProfileCtrl,
  updateShippingAddresCtrl,
} from "../controllers/usersCtrl.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";

const userRouter = exppress.Router();

userRouter.post("/register", registerUserCtrl);
userRouter.post("/login", loginUserCtrl);
userRouter.get("/profile", isLoggedIn, getUserProfileCtrl);
userRouter.put("/update/shipping", isLoggedIn, updateShippingAddresCtrl);
export default userRouter;