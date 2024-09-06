import express from "express"
import sideChairModel from "../../../models/SideChair.js"




const router = express.Router()

router.get("/side_chair", async(req, res)=>{
    const result = await sideChairModel.find()
    res.send(result)
})
export default router