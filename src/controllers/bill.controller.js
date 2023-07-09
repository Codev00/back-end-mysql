import { BillModel } from "../models/index.js";

const billController = {
   createBill: async (req, res) => {
      try {
         const { MaNV, MaKV, MaBan, TrangThai, TongThu, MaCH } = req.body;
         const bill = new BillModel({
            MaNV,
            MaKV,
            MaBan,
            TrangThai,
            TongThu,
            MaCH,
         });
         const result = await bill.create();
         console.log(result.insertId);
         res.status(200).json({
            result: result,
            id: result.insertId,
            message: "Create bill successfully",
         });
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   getBill: async (req, res) => {
      try {
         const { id } = req.params;
         const bill = await BillModel.findById(id);
         res.status(200).json(bill[0]);
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   updateBill: async (req, res) => {
      try {
         const { id } = req.params;
         const { MaNV, MaKV, MaBan, TrangThai, TongThu, MaCH } = req.body;
         await BillModel.updateById(id, {
            MaNV,
            MaKV,
            MaBan,
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
   updateTotal: async (req, res) => {
      try {
         const { id } = req.params;
         console.log(req.body);
         const { TongThu } = req.body;
         const result = await BillModel.updateTotal(id, { TongThu });
         res.status(200).json(result);
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },
   Pay: async (req, res) => {
      try {
         const { id } = req.params;
         const { TongThu } = req.body;
         const result = await BillModel.Pay(id, { TongThu });
         res.status(200).json(result);
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },
};

export default billController;
