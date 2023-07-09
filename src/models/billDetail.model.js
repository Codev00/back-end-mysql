import db from "../config/db.js";

class billDetailModel {
   constructor({ MaSP, SoLuong, ChietKhau, MaCH, MaHD }) {
      this.MaSP = MaSP;
      this.SoLuong = SoLuong;
      this.ChietKhau = ChietKhau;
      this.MaCH = MaCH;
      this.MaHD = MaHD;
   }

   async create() {
      try {
         const sql = `INSERT INTO chitietHD (MaSP, SoLuong, ChietKhau, MaCH, MaHD) VALUES (${this.MaSP}, ${this.SoLuong},  ${this.ChietKhau},  ${this.MaCH}, ${this.MaHD})`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async findById(id) {
      try {
         const sql = `SELECT * FROM chitietHD WHERE id = ${id}`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async updateById(id, data) {
      try {
         const { MaSP, SoLuong, ChietKhau, MaCH } = data;
         const sql = `UPDATE chitietHD SET MaSP = '${MaSP}', SoLuong = '${SoLuong}',  ChietKhau = '${ChietKhau}',  MaCH = '${MaCH}' WHERE id = ${id}`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async deleteById(id) {
      try {
         const sql = `DELETE FROM chitietHD WHERE id = ${id}`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }
}

export default billDetailModel;
