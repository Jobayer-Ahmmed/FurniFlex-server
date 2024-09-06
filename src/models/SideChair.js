

import { Schema, model } from "mongoose";


const sideChairSchema = new Schema({
    id: {type: String, required: true},
    image: {type: String},
    name: {type: String},
    current_price: {type: Number},
    previous_price: {type: Number},
    description: {type: String}
})

const sideChairModel = model("sideChairCollectioin", sideChairSchema)
export default sideChairModel