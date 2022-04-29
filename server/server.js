const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const router = express.Router();
const Sales = require('./model/sales')

const app = express();
app.use(express.json());
app.use(cors());
require("dotenv").config();
app.use('/',router)
//console.log(process.env.URL);

mongoose.connect(process.env.URL, {
    useNewUrlParser:true,
    // useFindAndModify:true,
    // useCreateIndex:true,
    useUnifiedTopology:true
}).then(() =>console.log("Mongo DB Connected")).catch((err) => console.log("db not connected",err));

router.post("/insert", async (req,res) => {
    const id = req.body.id;
    const productName = req.body.productName;
    const quantity = req.body.quantity;
    const price = req.body.price;
    console.log("hey insert");
    console.log(id,productName,price,quantity);
    const sales = new Sales({id:id, productName:productName,quantity:quantity,price:price})
    try {
        await sales.save();
        res.send("data inserted")
    } catch (error) {
        console.log(error);
    }
})
router.get("/read",async(req,res) => {
    const response = await Sales.find({}).exec();
    res.send(response);
})

app.listen(process.env.PORT, () => console.log(`server running on PORT ${process.env.PORT}`))

