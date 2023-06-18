import { IngredientModel } from "../models/index.js";

const ingredientController = {
   createIngredient: async (req, res) => {
      try {
         const { TenNCC, DiaChi, sdt } = req.body;
         const newIngredient = new IngredientModel({
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
         const ingredient = await IngredientModel.findById(id);
         res.status(200).json(ingredient);
      } catch (error) {
         res.status(500).send({ message: error.message });
      }
   },

   editIngredient: async (req, res) => {
      try {
         const { id } = req.params;
         const { TenNCC, DiaChi, sdt } = req.body;
         const ingredient = await IngredientModel.updateById(
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
         await IngredientModel.deleteById(id);
         res.status(200).json("Delete ingredient successfully");
      } catch (error) {
         res.status(500).send({ message: error.message });
      }
   },
};

export default ingredientController;
