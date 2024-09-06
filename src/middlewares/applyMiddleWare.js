import expres from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import LOCAL_CLIENT from "../config/default.js"

const applyMiddleWare=(app)=>{
    app.use(cors({
        origin:[LOCAL_CLIENT],
        credentials:true
    }))
    app.use(expres.json())
    app.use(cookieParser())
}

export default applyMiddleWare