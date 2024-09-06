import express from "express"
import rockingChairModel from "../../../models/RockingChair.js"


const router = express.Router()

router.get("/rocking_chair", async(req, res)=>{
    const result = await rockingChairModel.find()
    res.send(result)
})
export default router