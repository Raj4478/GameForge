import { Router } from "express";
import { registerUser,loginUser,logoutUser,updateAccountDetails,updateUserCoverImage,changeCurrentPassword,getCurrentUser,refreshAccessToken,gameCollection, removeGameFromCollection } from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name : "coverImage",
            maxCount:1
        }
    ])
    ,registerUser
)

router.route("/login").post(loginUser)

router.route("/refresh-token").post(refreshAccessToken)


router.route("/logout").post(verifyJWT,logoutUser)

router.route("/change-password").post(verifyJWT,changeCurrentPassword)

router.route("/current-user").get(verifyJWT,getCurrentUser)

router.route("/update-account").patch(verifyJWT,updateAccountDetails)

router.route("/gameid").post(verifyJWT,gameCollection)

router.route("/removegameid").post(verifyJWT,removeGameFromCollection)

router.route("/coverImage").patch(verifyJWT,upload.single("coverImage"),updateUserCoverImage)

export default router