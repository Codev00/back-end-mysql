import { QueryModel } from "../models/index.js";

const queryController = {
   getStaff: async (req, res) => {
      try {
         const { id } = req.params;
         const result = await QueryModel.getAllStaff(id);
         res.status(200).json(result);
      } catch (error) {
         res.status(500).json(error.message);
      }
   },

   getBill: async (req, res) => {
      try {
         const { id } = req.params;
         const result = await QueryModel.getAllBill(id);
         res.status(200).json(result);
      } catch (error) {
         res.status(500).json(error.message);
      }
   },

   getBillDetail: async (req, res) => {
      try {
         const { id } = req.params;
         const result = await QueryModel.getAllBillDetail(id);
         res.status(200).json(result);
      } catch (error) {
         res.status(500).json(error.message);
      }
   },

   getArea: async (req, res) => {
      try {
         const { id } = req.params;
         const result = await QueryModel.getAllArea(id);
         res.status(200).json(result);
      } catch (error) {
         res.status(500).json(error.message);
      }
   },

   getTable: async (req, res) => {
      try {
         const { id } = req.params;
         const result = await QueryModel.getAllTable(id);
         res.status(200).json(result);
      } catch (error) {
         res.status(500).json(error.message);
      }
   },

   getProduct: async (req, res) => {
      try {
         const { id } = req.params;
         const result = await QueryModel.getAllProduct(id);
         res.status(200).json(result);
      } catch (error) {
         res.status(500).json(error.message);
      }
   },

   getStore: async (req, res) => {
      try {
         const { id } = req.params;
         const result = await QueryModel.getAllStore(id);
         res.status(200).json(result);
      } catch (error) {
         res.status(500).json(error.message);
      }
   },
};

export default queryController;
