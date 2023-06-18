import db from "../config/index.js";

class customerModel {
   constructor({ HoTen, sdt, email }) {
      this.HoTen = HoTen;
      this.sdt = sdt;
      this.email = email;
   }

   async create() {
      try {
         const sql = `INSERT INTO customers (HoTen, sdt, email) VALUES ('${this.HoTen}', '${this.sdt}', '${this.email}')`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async findById(id) {
      try {
         const sql = `SELECT * FROM customers WHERE id = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async updateById(id, data) {
      try {
         const { HoTen, sdt, email } = data;
         const sql = `UPDATE customers SET HoTen = '${HoTen}', sdt = '${sdt}', email = '${email}' WHERE id = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async deleteById(id) {
      try {
         const sql = `DELETE FROM customers WHERE id = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }
}

export default customerModel;
