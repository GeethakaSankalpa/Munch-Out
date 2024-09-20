import foodModel from "../models/foodModel.js";
import fs from 'fs'


// add food item

const addFood = async (request, response) => {

    // variable to store the image name
    let image_filename = `${request.file.filename}`;

    // create new food
    const food = new foodModel({
        name: request.body.name,
        description: request.body.description,
        price: request.body.price,
        category: request.body.category,
        image: image_filename
    })

    try {
        await food.save();
        response.json({ success: true, message: "Food Added" })
    } catch (error) {
        console.log(error)
        response.json({ success: false, message: "Error" })

    }

}

export { addFood }