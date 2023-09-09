const express = require("express");

const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router obj
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST

router.post("/getUserData", authMiddleware, authController);

//Apply doctor || POST

router.post("/apply-doctor", authMiddleware, applyDoctorController);

module.exports = router;
