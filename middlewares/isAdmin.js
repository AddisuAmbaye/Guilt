import User from "../models/User.js";
const isAdmin = async (req, res, next) => {
  //find the login user
  const user = await User.findById(req.userAuth);
  //check if admin
  if (user?.isAdmin) {
    next();
  } else {
    next(new Error("Access denied, admin only"));
  }
};

export default isAdmin;