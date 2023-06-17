import db from "../config/db.js";

class CompanyModel {
   constructor({ tenCty, DiaChi, sdt }) {
      (this.tenCty = tenCty), (this.DiaChi = DiaChi), (this.sdt = sdt);
   }

   create = async () => {
      try {
         const sql = `INSERT INTO cty (tenCty, DiaChi, sdt) VALUES ("${this.tenCty}", "${this.DiaChi}", ${this.sdt})`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log({ error: error.message });
      }
   };

   static getAll = async () => {
      try {
         const sql = `SELECT * FROM cty`;
         const [rows, _] = await db.execute(sql); //const rows = await db.execute(sql); return rows[0];
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   };
}

export default CompanyModel;
