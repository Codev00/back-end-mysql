import { CompanyModel } from "../models/index.js";

const companyController = {
   creareCompany: async (req, res) => {
      try {
         const { tenCty, DiaChi, sdt } = req.body;
         const newCompany = new CompanyModel({ tenCty, DiaChi, sdt });
         const result = await newCompany.create();
         res.status(200).json("Create company successfully");
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   },
   getAllCompany: async (req, res) => {
      try {
         const result = await CompanyModel.getAll();
         res.status(200).json(result);
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   },
};

export default companyController;
