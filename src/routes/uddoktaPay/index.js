import axios from "axios";
import express from "express"

const router = express.Router()

router.post("/payment", async(req, res)=>{
    // console.log(req.body)
    const { email, amount} = req.body;
    const full_name = "Testing"

    const options = {
        method: 'POST',
        url: process.env.UDDOKTAPAY_CHECKOUT_URL,
        headers: {
            'Accept': 'application/json',
            'RT-UDDOKTAPAY-API-KEY': process.env.UDDOKTAPAY_API_KEY,
            'Content-Type': 'application/json'
        },
        data: {
            full_name,
            email,
            amount,
            metadata: {},
            redirect_url: `http://localhost:5173/success`,
            // redirect_url: `https://electronia-99f43.web.app/success`,
            cancel_url: 'http://localhost:5173/cancel',
            webhook_url: 'http://localhost:5173/ipn',
            return_type:'GET'
        }
    };

    try {
        const response = await axios.request(options);    
        console.log(response.data)
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating payment charge' });
    }

})

export default router