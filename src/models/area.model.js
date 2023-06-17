import db from "../config/db.js";

class areaModel {
   constructor({ TenKV, TrangThai, MaCH }) {
      this.TenKV = TenKV;
      this.TrangThai = TrangThai;
      this.MaCH = MaCH;
   }

   async create() {
      try {
         const sql = `INSERT INTO khuvuc (TenKV, TrangThai, MaCH) VALUES ("${this.TenKV}", "${this.TrangThai}", ${this.MaCH})`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async findById(id) {
      try {
         const sql = `SELECT * FROM khuvuc WHERE MaKV = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async updateById(id, data) {
      try {
         const sql = `UPDATE khuvuc SET TenKV = "${data.TenKV}", TrangThai = "${data.TrangThai}",  WHERE MaKV = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async deleteById(id) {
      try {
         const sql = `DELETE FROM khuvuc WHERE MaKV = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }
}

export default areaModel;
