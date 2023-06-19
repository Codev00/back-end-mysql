import { InvoiceDetailModel } from "../models/index.js";

const invoiceDetailController = {
   createInvoiceDetail: async (req, res) => {
      try {
         const { MaNL, SL, Gia, MaCH, MaNH } = req.body;
         const newInvoiceDetail = new InvoiceDetailModel({
            MaNL,
            SL,
            Gia,
            MaCH,
            MaNH,
         });
         await newInvoiceDetail.create();
         res.status(200).json("Create invoice detail successfully");
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },
   getInvoiceDetail: async (req, res) => {
      try {
         const { id } = req.params;
         const invoiceDetail = await InvoiceDetailModel.findById(id);
         res.status(200).json(invoiceDetail);
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   editInvoiceDetail: async (req, res) => {
      try {
         const { id } = req.params;
         const { MaNL, SL, Gia, MaCH, MaNH } = req.body;
         await InvoiceDetailModel.updateById(id, { MaNL, SL, Gia, MaCH, MaNH });
         res.status(200).json("Edit invoice detail successfully");
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   deleteInvoiceDetail: async (req, res) => {
      try {
         const { id } = req.params;
         await InvoiceDetailModel.deleteById(id);
         res.status(200).json("Delete invoice detail successfully");
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },
};

export default invoiceDetailController;
