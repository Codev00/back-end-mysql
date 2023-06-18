import db from "../config/db.js";

class materialModel {
   constructor({ TenNL, MaNCC }) {
      this.TenNL = TenNL;
      this.MaNCC = MaNCC;
   }

   async create() {
      try {
         const sql = `INSERT INTO nguyenlieu (TenNL, MaNCC) VALUES ('${this.TenNL}', '${this.MaNCC}')`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async findById(id) {
      try {
         const sql = `SELECT * FROM nguyenlieu WHERE MaNL = ${id}`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async updateById(id, data) {
      try {
         const sql = `UPDATE nguyenlieu SET TenNL = '${data.TenNL}', MaNCC = '${data.MaNCC}' WHERE MaNL = ${id}`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async deleteById(id) {
      try {
         const sql = `DELETE FROM nguyenlieu WHERE MaNL = ${id}`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }
}

export default materialModel;
