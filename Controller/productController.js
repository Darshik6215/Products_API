import Product from "../Models/product.js";

const productController = {
  // all products
  async showData(req, res) {
    try {
      const data = await Product.find();
      res.send({ mess: "Show all data", data });
    } catch (err) {
      res.status(500).send("Failed to fetch products");
    }
  },

  // find one product
  async findOneData(req, res) {
    try {
      const data = await Product.findById(req.params.id);
      res.send({ mess: "Show data", data });
    } catch (error) {
      res.status(500).send("Failed to fetch products");
    }
  },

  // create product
  async insertData(req, res) {
    try {
      const data = new Product(req.body);
      const result = await data.save();
      res.json({ message: "Product created successfully", result });
    } catch (err) {
      res
        .status(500)
        .json({ error: "Failed to create product", details: err.message });
    }
  },

  // update product
  async updateData(req, res) {
    try {
      const data = await Product.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.json({ mess: "Product Updated Successfully...", data });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to update product", details: err.message });
    }
  },

  // delete product
  async deleteData(req, res) {
    try {
      const data = await Product.findByIdAndDelete(req.params.id);
      res.json({ mess: "Product Deleted Successfully...", data });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to delete product", details: err.message });
    }
  },
};

export default productController;
