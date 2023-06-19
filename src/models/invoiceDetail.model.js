import db from "../config/db.js";

class InvoiceDetailModel {
   constructor({ MaNL, SL, Gia, MaCH, MaNH }) {
      this.MaNL = MaNL;
      this.SL = SL;
      this.Gia = Gia;
      this.MaCH = MaCH;
      this.MaNH = MaNH;
   }

   async create() {
      try {
         const sql = `INSERT INTO ChiTietHoaDonNH (MaNL, SL, Gia, MaCH, MaNH) VALUES ('${this.MaNL}', '${this.SL}', '${this.Gia}', '${this.MaCH}', '${this.MaNH}')`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async findById(id) {
      try {
         const sql = `SELECT * FROM ChiTietHoaDonNH WHERE id = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async updateById(id, data) {
      try {
         const { MaNL, SL, Gia, MaCH, MaNH } = data;
         const sql = `UPDATE ChiTietHoaDonNH SET MaNL = '${MaNL}', SL = '${SL}', Gia = '${Gia}', MaCH = '${MaCH}', MaNH = '${MaNH}' WHERE id = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async deleteById(id) {
      try {
         const sql = `DELETE FROM ChiTietHoaDonNH WHERE id = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }
}

export default InvoiceDetailModel;
