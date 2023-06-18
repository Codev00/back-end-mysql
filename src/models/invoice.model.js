import db from "../config/db.js";

class InvoiceModel {
   constructor({ GioNhap, TongTra, MaNV, MaCH }) {
      this.GioNhap = GioNhap;
      this.TongTra = TongTra;
      this.MaNV = MaNV;
      this.MaCH = MaCH;
   }

   async create() {
      try {
         const sql = `INSERT INTO hoadonnhaphang (GioNhap, TongTra, MaNV, MaCH) VALUES ('${this.GioNhap}', '${this.TongTra}', '${this.MaNV}', '${this.MaCH}')`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async findById(id) {
      try {
         const sql = `SELECT * FROM hoadonnhaphang WHERE MaNH = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async updateById(id, data) {
      try {
         const { GioNhap, TongTra, MaNV, MaCH } = data;
         const sql = `UPDATE hoadonnhaphang SET GioNhap = '${GioNhap}', TongTra = '${TongTra}', MaNV = '${MaNV}', MaCH = '${MaCH}' WHERE MaNH = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async deleteById(id) {
      try {
         const sql = `DELETE FROM hoadonnhaphang WHERE id = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }
}

export default InvoiceModel;
