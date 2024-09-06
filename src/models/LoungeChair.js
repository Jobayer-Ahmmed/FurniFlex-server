

import { Schema, model } from "mongoose";


const loungeChairSchema = new Schema({
    id: {type: String, required: true},
    image: {type: String},
    name: {type: String},
    current_price: {type: Number},
    previous_price: {type: Number},
    description: {type: String}
})

const loungeChairModel = model("loungeChairCollectioin", loungeChairSchema)
export default loungeChairModel