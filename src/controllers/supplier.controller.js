import { SupplierModel } from "../models/index.js";

const supplierController = {
   createIngredient: async (req, res) => {
      try {
         const { TenNCC, DiaChi, sdt } = req.body;
         const newIngredient = new SupplierModel({
            TenNCC,
            DiaChi,
            sdt,
         });
         await newIngredient.create();
         res.status(200).json("Create ingredient successfully");
      } catch (error) {
         res.status(500).send({ message: error.message });
      }
   },

   getIngredient: async (req, res) => {
      try {
         const { id } = req.params;
         const ingredient = await SupplierModel.findById(id);
         res.status(200).json(ingredient);
      } catch (error) {
         res.status(500).send({ message: error.message });
      }
   },

   editIngredient: async (req, res) => {
      try {
         const { id } = req.params;
         const { TenNCC, DiaChi, sdt } = req.body;
         const ingredient = await SupplierModel.updateById(
            id,
            { TenNCC, DiaChi, sdt },
            { new: true }
         );
         res.status(200).json("Update ingredient successfully");
      } catch (error) {
         res.status(500).send({ message: error.message });
      }
   },

   deleteIngredient: async (req, res) => {
      try {
         const { id } = req.params;
         await SupplierModel.deleteById(id);
         res.status(200).json("Delete ingredient successfully");
      } catch (error) {
         res.status(500).send({ message: error.message });
      }
   },
};

export default supplierController;
