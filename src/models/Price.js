

import { Schema, model } from "mongoose";


const priceSchema = new Schema({
    price_id: {type: String, required: true},
    price: {type: Number},

})

const priceModel = model("priceCollectioin", priceSchema)
export default priceModel