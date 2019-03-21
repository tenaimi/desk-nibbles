const axios = require("axios");
const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require('cors');
const port = process.env.PORT || 3001;

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(logger("dev"));
app.get("/snackers", (req, res) => {
    axios.get("https://s3.amazonaws.com/misc-file-snack/MOCK_SNACKER_DATA.json").then(res1 => {
        const snackers = res1.data;
        axios.get("https://ca.desknibbles.com/products.json?limit=250").then(res2 => {
            const products = res2.data.products;
            let stocked = {};
            let totalPrice = 0
            snackers.forEach(snacker => {
                products.forEach(product => {
                    if (snacker.fave_snack.toLowerCase().includes(product.title.toLowerCase())) {
                        console.log(snacker.email);
                        stocked[snacker.email] = [];
                        stocked[snacker.email].push({
                            title: product.title,
                            price: product.variants[0].price,
                            image: product.images[0].src
                        });
                        totalPrice += Number(product.variants[0].price);
                    }
                })
            });
            res.send({ stocked, totalPrice });
        })
    })
});

app.listen(port, () => console.log(`server running on port ${port}`))
