import express from "express"
import loungeChairModel from "../../../models/LoungeChair.js"



const router = express.Router()

router.get("/lounge_chair", async(req, res)=>{
    const result = await loungeChairModel.find()
    res.send(result)
})
export default router