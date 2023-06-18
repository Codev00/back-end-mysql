import { InvoiceModel } from "../models/index.js";

const invoiceController = {
   createInvoice: async (req, res) => {
      try {
         const { GioNhap, TongTra, MaNV, MaCH } = req.body;
         const newInvoice = new InvoiceModel({
            GioNhap,
            TongTra,
            MaNV,
            MaCH,
         });
         await newInvoice.create();
         res.status(200).json("Create invoice successfully");
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   getInvoice: async (req, res) => {
      try {
         const { id } = req.params;
         const invoice = await InvoiceModel.findById(id);
         res.status(200).json(invoice);
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   editInvoice: async (req, res) => {
      try {
         const { id } = req.params;
         const { GioNhap, TongTra, MaNV, MaCH } = req.body;
         await InvoiceModel.updateById(id, { GioNhap, TongTra, MaNV, MaCH });
         res.status(200).json("Edit invoice successfully");
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   deleteInvoice: async (req, res) => {
      try {
         const { id } = req.params;
         await InvoiceModel.deleteById(id);
         res.status(200).json("Delete invoice successfully");
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },
};

export default invoiceController;
