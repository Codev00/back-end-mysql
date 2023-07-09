import { TableModel } from "../models/index.js";

const tableController = {
   createTable: async (req, res) => {
      try {
         const { TenBan, TrangThai, MaKV, MaCH, MaHD } = req.body;
         const table = new TableModel({ TenBan, TrangThai, MaKV, MaCH, MaHD });
         await table.create();
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
         const { TenBan, TrangThai, MaKV, MaCH, MaHD } = req.body;
         const id = req.params.id;
         await TableModel.updateById(id, {
            TenBan,
            TrangThai,
            MaKV,
            MaCH,
            MaHD,
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

   updateMaHD: async (req, res) => {
      try {
         const id = req.params.id;
         await TableModel.updateMaHD(id);
         res.status(200).json("Pay Successfully");
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   },
};

export default tableController;
