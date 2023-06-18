import db from "../config/db.js";

class supplierModel {
   constructor({ TenNCC, DiaChi, sdt }) {
      this.TenNCC = TenNCC;
      this.DiaChi = DiaChi;
      this.sdt = sdt;
   }

   async create() {
      try {
         const sql = `INSERT INTO nhacungcap (TenNCC, DiaChi, sdt) VALUES ('${this.TenNCC}', '${this.DiaChi}', '${this.sdt}')`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async findById(id) {
      try {
         const sql = `SELECT * FROM nhacungcap WHERE MaNCC = '${id}'`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async updateById(id, data) {
      try {
         const { TenNCC, DiaChi, sdt } = data;
         const sql = `UPDATE nhacungcap SET TenNCC = '${TenNCC}', DiaChi = '${DiaChi}', sdt = '${sdt}' WHERE MaNCC = '${id}'`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async deleteById(id) {
      try {
         const sql = `DELETE FROM nhacungcap WHERE MaNCC = '${id}'`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }
}

export default supplierModel;
