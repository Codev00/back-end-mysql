import db from "../config/db.js";

class billModel {
   constructor({ MaNV, MaKV, MaBan, TrangThai, TongThu, MaCH }) {
      this.MaNV = MaNV;
      this.MaKV = MaKV;
      this.MaBan = MaBan;
      this.TrangThai = TrangThai;
      this.TongThu = TongThu;
      this.MaCH = MaCH;
   }

   async create() {
      try {
         const sql = `INSERT INTO hoadon (MaNV, MaKV, MaBan,  TrangThai, TongThu, MaCH) VALUES (${this.MaNV}, ${this.MaKV}, ${this.MaBan},  ${this.TrangThai}, ${this.TongThu}, ${this.MaCH})`;
         const [rows, _] = await db.query(sql);
         console.log(rows);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async findById(id) {
      try {
         const sql = `SELECT * FROM hoadon WHERE MaHD = ${id}`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async updateById(id, data) {
      try {
         const { MaNV, MaKV, MaBan, TrangThai, TongThu, MaCH } = data;
         const sql = `UPDATE hoadon SET MaNV = ${MaNV}, MaKV = ${MaKV}, MaBan = ${MaBan}, TrangThai = ${TrangThai}, TongThu = ${TongThu}, MaCH = ${MaCH} where MaHD = ${id}`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async deleteById(id) {
      try {
         const sql = `DELETE FROM hoadon WHERE id = ${id}`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static updateTotal(id, data) {
      try {
         const { TongThu } = data;
         const sql = `UPDATE hoadon SET TongThu = ${TongThu} WHERE MaHD = ${id}`;
         const [rows, _] = db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }
   static Pay(id, data) {
      try {
         const { TongThu } = data;
         const sql = `UPDATE hoadon SET TrangThai = 1, TongThu = ${TongThu} WHERE MaHD = ${id}`;
         const [rows, _] = db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }
}

export default billModel;
