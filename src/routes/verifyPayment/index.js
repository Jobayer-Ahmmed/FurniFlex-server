import express from "express"
import axios from "axios"

const router = express.Router()

router.post('/verify-payment', async (req, res) => {
    const invoice_id = req.query.invoice_id
    // console.log(invoice_id)
    try {
        const options = {
            method: 'POST',
            url: process.env.UDDOKTAPAY_PAYMENT_VERIFY_URL,
            headers: {
                'Accept': 'application/json',
                'RT-UDDOKTAPAY-API-KEY': process.env.UDDOKTAPAY_API_KEY,
                'Content-Type': 'application/json'
            },
            data: {
                invoice_id
            }
        };

        const response = await axios.request(options);
        
        res.json(response.data);
    } catch (error) {
        console.error("Error verifying payment:", error);
        res.status(500).json({ status: 'ERROR', message: 'Error verifying payment' });
    }
});

export default router;
