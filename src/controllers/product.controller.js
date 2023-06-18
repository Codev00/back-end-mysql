import { ProductModel } from "../models/index.js";

const productController = {
   createProduct: async (req, res) => {
      try {
         const { TenSP, Gia, MaCH } = req.body;
         const newProduct = new ProductModel({ TenSP, Gia, MaCH });
         await newProduct.create();
         res.status(200).json("Create product successfully");
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   getProduct: async (req, res) => {
      try {
         const id = req.params.id;
         const product = await ProductModel.findById(id);
         res.status(200).json(product);
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   editProduct: async (req, res) => {
      try {
         const { TenSP, Gia, MaCH } = req.body;
         const id = req.params.id;
         await ProductModel.updateById(id, { TenSP, Gia, MaCH });
         res.status(200).json("Update product successfully");
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   deleteProduct: async (req, res) => {
      try {
         const id = req.params.id;
         await ProductModel.deleteById(id);
         res.status(200).json("Delete product successfully");
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },
};

export default productController;
