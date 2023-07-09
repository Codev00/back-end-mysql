import { StoreModel, UserModel } from "../models/index.js";
import myMath from "../config/myMath.js";
const storeController = {
   createStore: async (req, res) => {
      try {
         const { tenCH, DiaChi, sdt, MaCty } = req.body;
         const store = new StoreModel({ tenCH, DiaChi, sdt, MaCty });
         await store.create();
         res.status(200).json("Create store successfully");
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   },
   getStore: async (req, res) => {
      try {
         const { id } = req.params;
         const result = await StoreModel.findById(id);
         res.status(200).json(result);
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   },
   EditStore: async (req, res) => {
      try {
         const { id } = req.params;
         const { tenCH, DiaChi, sdt, MaCty } = req.body;
         await StoreModel.updateById(id, {
            tenCH,
            DiaChi,
            sdt,
            MaCty,
         });
         res.status(200).json("Update store successfully");
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   },
   DeleteStore: async (req, res) => {
      try {
         const { id } = req.params;
         await StoreModel.deleteById(id);
         res.status(200).json("Delete store successfully");
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   },
};

export default storeController;
