import { AreaModel } from "../models/index.js";

const areaController = {
   createArea: async (req, res) => {
      try {
         const { TenKV, TrangThai, MaCH } = req.body;
         const newArea = new AreaModel({ TenKV, TrangThai, MaCH });
         await newArea.create();
         res.status(200).json("Create area successfully");
      } catch (error) {
         res.status(500).json(error.message);
      }
   },

   getArea: async (req, res) => {
      try {
         const id = req.params.id;
         const areas = await AreaModel.findById(id);
         res.status(200).json(areas);
      } catch (error) {
         res.status(500).json(error.message);
      }
   },

   EditArea: async (req, res) => {
      try {
         const id = req.params.id;
         const { TenKV, TrangThai, MaCH } = req.body;
         await AreaModel.updateById(id, { TenKV, TrangThai, MaCH });
         res.status(200).json("Update area successfully");
      } catch (error) {
         res.status(500).json(error.message);
      }
   },

   DeleteArea: async (req, res) => {
      try {
         const id = req.params.id;
         await AreaModel.deleteById(id);
         res.status(200).json("Delete area successfully");
      } catch (error) {
         res.status(500).json(error.message);
      }
   },
};

export default areaController;
