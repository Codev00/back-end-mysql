import db from "../config/db.js";

class storeModel {
   constructor({ tenCH, DiaChi, sdt, MaCty }) {
      this.tenCH = tenCH;
      this.DiaChi = DiaChi;
      this.sdt = sdt;
      this.MaCty = MaCty;
   }

   async create() {
      try {
         const sql = `INSERT INTO cuahang (tenCH, DiaChi, sdt, MaCty) VALUES ('${this.tenCH}', '${this.DiaChi}', '${this.sdt}', '${this.MaCty}')`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async findById(id) {
      try {
         const sql = `SELECT * FROM cuahang WHERE MaCH = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async updateById(id, data) {
      try {
         const { tenCH, DiaChi, sdt, MaCty } = data;
         const sql = `UPDATE cuahang SET tenCH = '${tenCH}', DiaChi = '${DiaChi}', sdt = '${sdt}', MaCty = '${MaCty}' WHERE MaCH = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }
   static async deleteById(id) {
      try {
         const sql = `DELETE FROM cuahang WHERE MaCH = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }
}

export default storeModel;
