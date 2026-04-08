import Product from "../models/product.js";
import { isAdmin } from "./userController.js";

export async function createProduct(req, res) {

    if (!isAdmin(req)) {
        return res.status(403).json(
            {
                message: "You are not authorized to create a product"
            }
        )
        return;
    }

    try {
        const productData = req.body;

        const product = new Product(productData);

        await product.save();

        res.json(
            {
                message: "Product created successfully",
                product: product
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                message: "Failed to create product",
            }
        )
    }

}

export async function getAllProducts(req, res) {


    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json(
            {
                message: "Failed to fetch products",
            }
        )
    }
}
export async function deleteProduct(req, res) {
    if (!isAdmin(req)) {
        return res.status(403).json(
            {
                message: "You are not authorized to delete a product"
            }
        )
        return;
    }

    try {
        const productID = req.params.productID;

        await Product.deleteOne({ productID: productID });
        res.json(
            {
                message: "Product deleted successfully"
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: "Failed to delete product"
            }
        )
    }
}

export async function updateProduct(req, res) {
    if (!isAdmin(req)) {
        res.status(403).json({
            message: "You are not authorized to update a product"
        })
        return;
    }


    try {
        const productID = req.params.productID;
        const updatedData = req.body;

        await Product.updateOne(

            { productID: productID },
            updatedData

        )
        res.status(200).json({
            message: "Product updated successfully"
        })
    } catch (err) {
        res.status(500).json({
            message: "Failed to update product",
            error: err.message
        })
    }

}
export async function getProductByID(req, res) {
    try {
        const productID = req.params.productID;
        const product = await Product.findOne(
            { productID: productID }
        )
        if (product == null) {
            res.status(404).json(
                {
                    message: "Product not found"
                }
            )
            return;
        } else {
            res.status(200).json(product);
        }
    } catch (error) {
        res.status(500).json(
            {
                message: "Failed to fetch product"
            }
        )
    }

}