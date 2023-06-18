import { MaterialModel } from "../models/index.js";

const materialController = {
   createMaterial: async (req, res) => {
      try {
         const { TenNL, MaNCC } = req.body;
         const newMaterial = new MaterialModel({
            TenNL,
            MaNCC,
         });
         await newMaterial.create();
         res.status(200).json("Create material successfully");
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   getMaterial: async (req, res) => {
      try {
         const { id } = req.params;
         const material = await MaterialModel.findById(id);
         res.status(200).json(material);
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   editMaterial: async (req, res) => {
      try {
         const { id } = req.params;
         const { TenNL, MaNCC } = req.body;
         await MaterialModel.updateById(id, { TenNL, MaNCC });
         res.status(200).json("Edit material successfully");
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   deleteMaterial: async (req, res) => {
      try {
         const { id } = req.params;
         await MaterialModel.deleteById(id);
         res.status(200).json("Delete material successfully");
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },
};

export default materialController;
