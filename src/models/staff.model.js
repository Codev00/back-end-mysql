import db from "../config/db.js";

class staffModel {
   constructor({ HoTen, NgaySinh, GioiTinh, sdt, DiaChi, MaCH }) {
      this.HoTen = HoTen;
      this.NgaySinh = NgaySinh;
      this.GioiTinh = GioiTinh;
      this.sdt = sdt;
      this.DiaChi = DiaChi;
      this.MaCH = MaCH;
   }

   async create() {
      try {
         const sql = `INSERT INTO nhanvien ( HoTen, NgaySinh, GioiTinh, sdt, DiaChi, MaCH) VALUES ( '${this.HoTen}', '${this.NgaySinh}', '${this.GioiTinh}', '${this.sdt}', '${this.DiaChi}', '${this.MaCH}')`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async findById(id) {
      try {
         const sql = `SELECT * FROM nhanvien WHERE MaNV = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async updateById(id, data) {
      try {
         const { HoTen, NgaySinh, GioiTinh, sdt, DiaChi, MaCH } = data;
         const sql = `UPDATE nhanvien SET  HoTen = '${HoTen}', NgaySinh = '${NgaySinh}', GioiTinh = '${GioiTinh}', sdt = '${sdt}', DiaChi = '${DiaChi}', MaCH = '${MaCH}' WHERE MaNV = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }

   static async deleteById(id) {
      try {
         const sql = `DELETE FROM nhanvien WHERE MaNV = ${id}`;
         const [rows, _] = await db.execute(sql);
         return rows;
      } catch (error) {
         console.log(error.message);
      }
   }
}

export default staffModel;
