import db from "../config/db.js";

class userModel {
   constructor({ username, password, admin, MaCH, MaNV = null }) {
      this.username = username;
      this.password = password;
      this.admin = admin;
      this.MaCH = MaCH;
      this.MaNV = MaNV;
   }

   async create() {
      try {
         const sql = `INSERT INTO user (username, password, admin, MaCH, MaNV) VALUES ('${this.username}', '${this.password}', '${this.admin}', '${this.MaCH}', '${this.MaNV}')`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async findById(username) {
      try {
         const sql = `SELECT * FROM user WHERE username = '${username}'`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async updateById(id, data) {
      try {
         const { username, password, admin, MaCH, MaNV } = data;
         const sql = `UPDATE user SET username = '${username}', password = '${password}', admin = '${admin}', MaCH = '${MaCH}', MaNV = '${MaNV}' WHERE id = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async deleteById(id) {
      try {
         const sql = `DELETE FROM user WHERE id = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }
}

export default userModel;
