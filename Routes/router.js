import express from "express";
import productController from "../Controller/productController.js";

const router = express.Router();

// Routes:
// all products
router.get("/", productController.showData);
// find one product
router.get("/:id", productController.findOneData);
// create product
router.post("/", productController.insertData);
// update product
router.put("/:id", productController.updateData);
// delete product
router.delete("/:id", productController.deleteData);

export default router;
