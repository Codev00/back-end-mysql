import { BillModel } from "../models/index.js";

const billController = {
   createBill: async (req, res) => {
      try {
         const {
            MaNV,
            MaKH,
            MaKV,
            MaBan,
            NgayGio,
            GioVao,
            GioRa,
            TrangThai,
            TongThu,
            MaCH,
         } = req.body;
         const bill = new BillModel({
            MaNV,
            MaKH,
            MaKV,
            MaBan,
            NgayGio,
            GioVao,
            GioRa,
            TrangThai,
            TongThu,
            MaCH,
         });
         await bill.create();
         res.status(200).json("Create bill successfully");
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   getBill: async (req, res) => {
      try {
         const { id } = req.params;
         const bill = await BillModel.findById(id);
         res.status(200).json(bill);
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   updateBill: async (req, res) => {
      try {
         const { id } = req.params;
         const {
            MaNV,
            MaKH,
            MaKV,
            MaBan,
            NgayGio,
            GioVao,
            GioRa,
            TrangThai,
            TongThu,
            MaCH,
         } = req.body;
         await BillModel.updateById(id, {
            MaNV,
            MaKH,
            MaKV,
            MaBan,
            NgayGio,
            GioVao,
            GioRa,
            TrangThai,
            TongThu,
            MaCH,
         });
         res.status(200).json("Update bill successfully");
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   deleteBill: async (req, res) => {
      try {
         const { id } = req.params;
         await BillModel.deleteById(id);
         res.status(200).json("Delete bill successfully");
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },
};

export default billController;
