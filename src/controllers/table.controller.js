import { TableModel } from "../models/index.js";

const tableController = {
   createTable: async (req, res) => {
      try {
         const { TenBan, TrangThai, MaKV, MaCH } = req.body;
         const table = new TableModel({ TenBan, TrangThai, MaKV, MaCH });
         const newTable = await table.create();
         res.status(200).json("Created table successfully");
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   },

   getTable: async (req, res) => {
      try {
         const id = req.params.id;
         const result = await TableModel.findById(id);
         res.status(200).json(result);
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   },

   editTable: async (req, res) => {
      try {
         const { TenBan, TrangThai, MaKV, MaCH } = req.body;
         const id = req.params.id;
         await TableModel.updateById(id, {
            TenBan,
            TrangThai,
            MaKV,
            MaCH,
         });
         res.status(200).json("Updated table successfully");
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   },

   deleteTable: async (req, res) => {
      try {
         const id = req.params.id;
         await TableModel.deleteById(id);
         res.status(200).json("Deleted table successfully");
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   },
};

export default tableController;
