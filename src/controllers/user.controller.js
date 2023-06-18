import { UserModel } from "../models/index.js";

const userController = {
   createUser: async (req, res) => {
      try {
         const { username, password, admin, MaCH, MaNV } = req.body;
         const newUser = new UserModel({
            username,
            password,
            admin,
            MaCH,
            MaNV,
         });
         await newUser.create();
         res.status(200).json("Create user successfully");
      } catch (error) {
         res.status(500).json(error.message);
      }
   },
   getUser: async (req, res) => {
      try {
         const { username, password } = req.params;
         const result = await UserModel.findById(username);
         res.status(200).json(result);
      } catch (error) {
         res.status(500).json(error.message);
      }
   },

   editUser: async (req, res) => {
      try {
         const { id } = req.params;
         const { username, password, admin, MaCH, MaNV } = req.body;
         await UserModel.updateById(id, {
            username,
            password,
            admin,
            MaCH,
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
