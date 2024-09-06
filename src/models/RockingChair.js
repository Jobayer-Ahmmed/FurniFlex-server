import { Schema, model } from "mongoose";


const rockingChairSchema = new Schema({
    id: {type: String, required: true},
    image: {type: String},
    name: {type: String},
    current_price: {type: Number},
    previous_price: {type: Number},
    description: {type: String}
})

const rockingChairModel = model("rockingChairCollectioin", rockingChairSchema)
export default rockingChairModel