import Product from "../models/Product.js";
import asyncHandler from "express-async-handler"

export const createProductCtrl = asyncHandler(
    async(req, res) => {
        const { name,description,brand,category,sizes,colors,user,price,totalQty } = req.body;
        const productExists = await Product.findOne({ name });
        if(productExists){
            throw new Error("Product Already Exists");
        }
    const product = await Product.create({
        name,
        description,
        category,
        brand,
        sizes,
        colors,
        user: req.userAuth,
        price,
        totalQty
    });
res.json({
    status: "success",
    message: "product created successfully",
    product,
})
});

export const getProductsCtrl = asyncHandler(
    async(req, res) => {
       let  productQuery = Product.find();
        //search by name 
       if (req.query.name) {
          productQuery = productQuery.find({
            name: { $regex: req.query.name, $options: "i" },
        });
      }
        //search by brand 
      if (req.query.brand) {
        productQuery = productQuery.find({
          brand: { $regex: req.query.brand, $options: "i" },
            });
          }
       //filter by category
    if (req.query.category) {
        productQuery = productQuery.find({
        category: { $regex: req.query.category, $options: "i" },
        });
    }

    //filter by color
    if (req.query.color) {
        productQuery = productQuery.find({
        colors: { $regex: req.query.color, $options: "i" },
        });
    }

    //filter by size
    if (req.query.size) {
        productQuery = productQuery.find({
        sizes: { $regex: req.query.size, $options: "i" },
        });
    }
     //await query
     const products = await productQuery;
     res.json({
        message: "Sucesses",
        products
      });
});