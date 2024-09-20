import express from "express"
import { addFood } from "../controllers/foodController.js";
import multer from "multer" // creates image storage system

// create router
const foodRouter = express.Router();

// Image storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (request, file, callback) => {
        return callback(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

// create post request
foodRouter.post("/add", upload.single("image"),addFood)




export default foodRouter;
