import { BillDetailModel } from "../models/index.js";

const billDetailController = {
   createBillDetail: async (req, res) => {
      try {
         const { MaSP, SoLuong, DonGia, ChietKhau, GiaBan, MaCH, MaHD } =
            req.body;
         const billDetail = new BillDetailModel({
            MaSP,
            SoLuong,
            DonGia,
            ChietKhau,
            GiaBan,
            MaCH,
            MaHD,
         });
         const result = await billDetail.create();
         res.status(200).json({
            result,
            message: "Create bill detail success",
         });
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   getBillDetail: async (req, res) => {
      try {
         const { id } = req.params;
         const billDetail = await BillDetailModel.findById(id);
         res.status(200).json(billDetail);
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   editBillDetail: async (req, res) => {
      try {
         const { id } = req.params;
         const { MaSP, SoLuong, DonGia, ChietKhau, GiaBan, MaCH } = req.body;
         await BillDetailModel.updateById(id, {
            MaSP,
            SoLuong,
            DonGia,
            ChietKhau,
            GiaBan,
            MaCH,
         });
         res.status(200).json("Update bill detail success");
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   deleteBillDetail: async (req, res) => {
      try {
         const { id } = req.params;
         await BillDetailModel.deleteById(id);
         res.status(200).json("Delete bill detail success");
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },
};

export default billDetailController;
