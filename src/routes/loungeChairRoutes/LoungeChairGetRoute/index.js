import express from "express";
import loungeChairModel from "../../../models/LoungeChair.js";

const router = express.Router();

router.get("/lounge_chair", async (req, res) => {
  const page = parseInt(req.query.page) - 1;
  const size = 6;
  try {
    const perPageData = await loungeChairModel
      .find()
      .skip(page * size)
      .limit(size)
      .exec();
    const totalData = await loungeChairModel.estimatedDocumentCount();
    res.send({ perPageData, totalData });
  } catch (error) {
    res.status(500).send({ error: "An error occurred in loungeChairGetRoute" });
  }
});
export default router;
