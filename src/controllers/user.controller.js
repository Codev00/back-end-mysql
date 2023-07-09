import { UserModel } from "../models/index.js";

const userController = {
   createUser: async (req, res) => {
      try {
         const { username, password, admin, MaCty, MaNV } = req.body;
         const newUser = new UserModel({
            username,
            password,
            admin,
            MaCty,
            MaNV,
         });
         const result = await newUser.create();
         res.status(200).json({ message: "Create user successfully", newUser });
      } catch (error) {
         res.status(500).json(error.message);
      }
   },
   getUser: async (req, res) => {
      try {
         const { username, password } = req.body;
         const result = await UserModel.findById(username);
         if (!result) {
            return res.status(404).json("No User !!!");
         }
         res.status(200).json(result[0]);
      } catch (error) {
         res.status(500).json(error.message);
      }
   },

   editUser: async (req, res) => {
      try {
         const { id } = req.params;
         const { username, password, admin, MaCty, MaNV } = req.body;
         await UserModel.updateById(id, {
            username,
            password,
            admin,
            MaCty,
            MaNV,
         });
         res.status(200).json("Update user successfully");
      } catch (error) {
         res.status(500).json(error.message);
      }
   },

   deleteUser: async (req, res) => {
      try {
         const { id } = req.params;
         await UserModel.deleteById(id);
         res.status(200).json("Delete user successfully");
      } catch (error) {
         res.status(500).json(error.message);
      }
   },
};

export default userController;
