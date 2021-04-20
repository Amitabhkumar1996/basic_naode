const express = require('express');
const app = express();
const ConnectionURL = "mongodb://localhost:27017/mydb";
const mongoose = require('mongoose');

(async function () {
    try {
        await mongoose.connect(ConnectionURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
    } catch (err) {
        throw err
    }
})();

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = new Schema({
    product: ObjectId,
    name: String,
    price: String,
    date: Date
});


const Category = new Schema({
    cat_id: ObjectId,
    type: String,
    date: Date
});

const Product_Detail = new Schema({
    pro_id: ObjectId,
    product_id: String,
    wait: String,
    price: String,
    date: Date
});

const product = mongoose.model('products', Product);
const category = mongoose.model('categoes', Category);
const ProductDetails = mongoose.model('product_details', Product_Detail);

app.get('/', () => {
    product.find((err, data) => {
        if (err) {
            throw err;
        }
        data.map((res) => {
            console.log(res);
        })
    })

    category.find((err, data) => {
        if (err) {
            throw err;
        }
        data.map((res) => {
            console.log(res);
        })
    })

    ProductDetails.find((err, data) => {
        if (err) {
            throw err;
        }
        data.map((res) => {
            console.log(res);
        })
    })
})

app.listen(3000, () => {
    console.log("server is running at port 3000");
})