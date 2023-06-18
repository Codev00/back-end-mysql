import db from "../config/db.js";

class tableModel {
   constructor({ TenBan, TrangThai, MaKV, MaCH }) {
      this.TenBan = TenBan;
      this.TrangThai = TrangThai;
      this.MaKV = MaKV;
      this.MaCH = MaCH;
   }

   async create() {
      try {
         const sql = `INSERT INTO table (TenBan, TrangThai, MaKV, MaCH) VALUES ('${this.TenBan}', '${this.TrangThai}', '${this.MaKV}', '${this.MaCH}')`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async findById(id) {
      try {
         const sql = `SELECT * FROM table WHERE id = ${id}`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async updateById(id, data) {
      try {
         const { TenBan, TrangThai, MaKV, MaCH } = data;
         const sql = `UPDATE table SET TenBan = '${TenBan}', TrangThai = '${TrangThai}', MaKV = '${MaKV}', MaCH = '${MaCH}' WHERE id = ${id}`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async deleteById(id) {
      try {
         const sql = `DELETE FROM table WHERE id = ${id}`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }
}

export default tableModel;
