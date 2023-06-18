import { json } from "express";
import { CustomerModel } from "../models/index.js";

const customerController = {
   createCustomer: async (req, res) => {
      try {
         const { HoTen, sdt, email } = req.body;
         const customer = new CustomerModel({ HoTen, sdt, email });
         await customer.create();
         res.status(200), json("Create customer successfully");
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   getCustomer: async (req, res) => {
      try {
         const id = req.params.id;
         const customer = await CustomerModel.findById(id);
         res.status(200).json(customer);
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   updateCustomer: async (req, res) => {
      try {
         const { HoTen, sdt, email } = req.body;
         const id = req.params.id;
         const customer = new CustomerModel({ HoTen, sdt, email });
         await customer.updateById(id, customer);
         res.status(200).json("Update customer successfully");
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },

   deleteCustomer: async (req, res) => {
      try {
         const id = req.params.id;
         await CustomerModel.deleteById(id);
         res.status(200).json("Delete customer successfully");
      } catch (error) {
         res.status(500).json({ message: error.message });
      }
   },
};

export default customerController;
