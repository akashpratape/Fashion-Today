import express from "express";
import cors from "cors";
import axios from 'axios';

const app = express();
const PORT = 8000;

app.use(cors())
app.use(express.json())

app.get("/store", async (req, res) => {

    try {
        const response = await axios.get("https://fakestoreapi.com/products")
        res.json(response.data)
        
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "failed to fetch data from api"});
    }
    
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
