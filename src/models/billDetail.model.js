import db from "../config/db.js";

class billDetailModel {
   constructor({ MaSP, SoLuong, DonGia, ChietKhau, GiaBan, MaCH, MaHD }) {
      this.MaSP = MaSP;
      this.SoLuong = SoLuong;
      this.DonGia = DonGia;
      this.ChietKhau = ChietKhau;
      this.GiaBan = GiaBan;
      this.MaCH = MaCH;
      this.MaHD = MaHD;
   }

   async create() {
      try {
         const sql = `INSERT INTO chitietHD (MaSP, SoLuong, DonGia, ChietKhau, GiaBan, MaCH, MaHD) VALUES ('${this.MaSP}', '${this.SoLuong}', '${this.DonGia}', '${this.ChietKhau}', '${this.GiaBan}', '${this.MaCH}', '${this.MaHD}')`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async findById(id) {
      try {
         const sql = `SELECT * FROM chitietHD WHERE id = ${id}`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async updateById(id, data) {
      try {
         const { MaSP, SoLuong, DonGia, ChietKhau, GiaBan, MaCH } = data;
         const sql = `UPDATE chitietHD SET MaSP = '${MaSP}', SoLuong = '${SoLuong}', DonGia = '${DonGia}', ChietKhau = '${ChietKhau}', GiaBan = '${GiaBan}', MaCH = '${MaCH}' WHERE id = ${id}`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async deleteById(id) {
      try {
         const sql = `DELETE FROM chitietHD WHERE id = ${id}`;
         const [rows, _] = await db.query(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }
}

export default billDetailModel;
