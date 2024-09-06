import express from "express"
import applyMiddleWare from "./middlewares/applyMiddleWare.js"
import rockingChairGet from "./routes/rockingChairRoutes/rockingChairGetRoute/index.js"
import loungeChairGet from "./routes/loungeChairRoutes/LoungeChairGetRoute/index.js"
import sideChairGet from "./routes/sideChairRoute/sideChairGetRoute/index.js"



const app =express()

applyMiddleWare(app)
app.use(rockingChairGet)
app.use(loungeChairGet)
app.use(sideChairGet)


app.get("/health", (req, res)=>{
    res.send("FurniFlex server is running")
})


app.all("*", (req, res, next)=>{
    const myErr = new Error(`The request URL is invalid : [${req.url}]`)
    myErr.status=404
    next(myErr)
})

app.use((err, req, res, next)=>{
    res.status(err.status || 500).json({message : err.message})
})

export default app