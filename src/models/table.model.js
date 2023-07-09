import db from "../config/db.js";

class tableModel {
   constructor({ TenBan, TrangThai, MaKV, MaCH, MaHD }) {
      this.TenBan = TenBan;
      this.TrangThai = TrangThai;
      this.MaKV = MaKV;
      this.MaCH = MaCH;
      this.MaHD = MaHD;
   }

   async create() {
      try {
         const sql = `INSERT INTO ban (TenBan, TrangThai, MaKV, MaCH, MaHD) VALUES ('${this.TenBan}', ${this.TrangThai}, ${this.MaKV}, ${this.MaCH}), (${this.MaHD})`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async findById(id) {
      try {
         const sql = `SELECT * FROM ban WHERE id = ${id}`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async updateById(id, data) {
      try {
         const { TenBan, TrangThai, MaKV, MaCH, MaHD } = data;
         const sql = `UPDATE ban SET TenBan = '${TenBan}', TrangThai = '${TrangThai}', MaKV = '${MaKV}', MaCH = '${MaCH}', MaHD = '${MaHD}' WHERE MaBan = ${id}`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async deleteById(id) {
      try {
         const sql = `DELETE FROM ban WHERE id = ${id}`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static updateMaHD(id) {
      try {
         const sql = `UPDATE ban SET MaHD = null, TrangThai = 0 WHERE MaBan = ${id}`;
         const [rows, _] = db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }
}

export default tableModel;
