import db from "../config/db.js";

class productModel {
   constructor({ TenSP, Gia, MaCH }) {
      this.TenSP = TenSP;
      this.Gia = Gia;
      this.MaCH = MaCH;
   }

   async create() {
      try {
         const sql = `INSERT INTO sanpham (TenSP,Gia, MaCH) VALUES ('${this.TenSP}','${this.Gia}','${this.MaCH}')`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async findById(id) {
      try {
         const sql = `SELECT * FROM sanpham WHERE MaSP = '${id}'`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async updateById(id, data) {
      try {
         const { TenSP, Gia, MaCH } = data;
         const sql = `UPDATE sanpham SET TenSP = '${TenSP}', Gia = '${Gia}', MaCH = '${MaCH}' WHERE MaSP = '${id}'`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async deleteById(id) {
      try {
         const sql = `DELETE FROM sanpham WHERE MaSP = '${id}'`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }
}

export default productModel;
