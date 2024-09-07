import express from "express"
import rockingChairModel from "../../../models/RockingChair.js"


const router = express.Router()

router.get("/rocking_chair", async(req, res)=>{
    const page = parseInt(req.query.page) - 1;
    const size = 6;
    try {
      const perPageData = await rockingChairModel
        .find()
        .skip(page * size)
        .limit(size)
        .exec();
      const totalData = await rockingChairModel.estimatedDocumentCount();
      res.send({ perPageData, totalData });
    } catch (error) {
      res.status(500).send({ error: "An error occurred in loungeChairGetRoute" });
    }
})
export default router