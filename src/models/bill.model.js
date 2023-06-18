import db from "../config/db.js";

class billModel {
   constructor({
      MaNV,
      MaKH,
      MaKV,
      MaBan,
      NgayGio,
      GioVao,
      GioRa,
      TrangThai,
      TongThu,
      MaCH,
   }) {
      this.MaNV = MaNV;
      this.MaKH = MaKH;
      this.MaKV = MaKV;
      this.MaBan = MaBan;
      this.NgayGio = NgayGio;
      this.GioVao = GioVao;
      this.GioRa = GioRa;
      this.TrangThai = TrangThai;
      this.TongThu = TongThu;
      this.MaCH = MaCH;
   }

   async create() {
      try {
         const sql = `INSERT INTO hoadon (MaNV, MaKH, MaKV, MaBan, NgayGio, GioVao, GioRa, TrangThai, TongThu, MaCH) VALUES ('${this.MaNV}', '${this.MaKH}', '${this.MaKV}', '${this.MaBan}', '${this.NgayGio}', '${this.GioVao}', '${this.GioRa}', '${this.TrangThai}', '${this.TongThu}', '${this.MaCH}')`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async findById(id) {
      try {
         const sql = `SELECT * FROM hoadon WHERE id = ${id}`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async updateById(id, data) {
      try {
         const {
            MaNV,
            MaKH,
            MaKV,
            MaBan,
            NgayGio,
            GioVao,
            GioRa,
            TrangThai,
            TongThu,
            MaCH,
         } = data;
         const sql = `UPDATE hoadon SET MaNV = ${MaNV}, MaKH = ${MaKH}, MaKV = ${MaKV}, MaBan = ${MaBan}, NgayGio = ${NgayGio}, GioVao = ${GioVao}, GioRa = ${GioRa}, TrangThai = ${TrangThai}, TongThu = ${TongThu}, MaCH = ${MaCH} `;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async deleteById(id) {
      try {
         const sql = `DELETE FROM hoadon WHERE id = ${id}`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }
}

export default billModel;
