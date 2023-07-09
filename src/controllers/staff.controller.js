import { StaffModel } from "../models/index.js";

const staffController = {
   createStaff: async (req, res) => {
      try {
         const { HoTen, NgaySinh, GioiTinh, sdt, DiaChi, MaCH } = req.body;
         const newStaff = new StaffModel({
            HoTen,
            NgaySinh,
            GioiTinh,
            sdt,
            DiaChi,
            MaCH,
         });
         await newStaff.create();
         res.status(200).json("Create staff successfully");
      } catch (error) {
         res.status(500).json(error.message);
      }
   },
   getStaff: async (req, res) => {
      try {
         const { id } = req.params;
         const result = await StaffModel.findById(id);
         res.status(200).json(result[0]);
      } catch (error) {
         res.status(500).json(error.message);
      }
   },
   editStaff: async (req, res) => {
      try {
         const { id } = req.params;
         const { HoTen, NgaySinh, GioiTinh, sdt, DiaChi, MaCH } = req.body;
         await StaffModel.updateById(id, {
            HoTen,
            NgaySinh,
            GioiTinh,
            sdt,
            DiaChi,
            MaCH,
         });
         res.status(200).json("Update staff successfully");
      } catch (error) {
         res.status(500).json(error.message);
      }
   },
   deleteStaff: async (req, res) => {
      try {
         const { id } = req.params;
         await StaffModel.deleteById(id);
         res.status(200).json("Delete staff successfully");
      } catch (error) {
         res.status(500).json(error.message);
      }
   },
};

export default staffController;
