import express from "express"
import sideChairModel from "../../../models/SideChair.js"




const router = express.Router()

router.get("/side_chair", async(req, res)=>{
    const page = parseInt(req.query.page) - 1;
    const size = 6;
    try {
      const perPageData = await sideChairModel
        .find()
        .skip(page * size)
        .limit(size)
        .exec();
      const totalData = await sideChairModel.estimatedDocumentCount();
      res.send({ perPageData, totalData });
    } catch (error) {
      res.status(500).send({ error: "An error occurred in loungeChairGetRoute" });
    }
})
export default router