import db from "../config/db.js";

class queryModel {
   static async getAllStaff(id) {
      try {
         const sql = `SELECT * FROM nhanvien WHERE MaCH = ${id} `;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }
   static async getAllBill(id) {
      try {
         const sql = `SELECT * FROM hoadon WHERE MaCH = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async getAllBillDetail(id) {
      try {
         const sql = `SELECT id,TenSP, Gia, SoLuong, ChietKhau FROM sanpham, chitietHD WHERE MaHD = ${id} and sanpham.MaSP = chitietHD.MaSP`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async getAllArea(id) {
      try {
         const sql = `SELECT * FROM khuvuc WHERE MaCH = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async getAllTable(id) {
      try {
         const sql = `SELECT * FROM ban WHERE MaCH = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async getAllProduct(id) {
      try {
         const sql = `SELECT * FROM sanpham WHERE MaCH = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async getAllStore(id) {
      try {
         const sql = `SELECT * FROM cuahang WHERE MaCty = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }
}

export default queryModel;
