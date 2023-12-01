// import { v4 as uuid } from "uuid";
// import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  avatarURL: {
    type: String,
    require: true,
  },
});

export const UserModel = model("User", UserSchema);

// const createNewUser = async ({ name, password, email, avatarURL }) => {
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = { name, password: hashedPassword, email, avatarURL };
//     const user = await UserModel.create(newUser);
//     return user;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getOneUser = async ({ id }) => {
//   try {
//     const user = await UserModel.findById(id);
//     // const allUsers = await UserModel.find()
//     return user;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getUserByEmail = async ({ email }) => {
//   try {
//     const user = await UserModel.findOne({ email });
//     return user;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const loginUser = async ({ email, password }) => {
//   try {
//     const user = await getUserByEmail({ email });
//     if (!user) return null;
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.sendStatus(404);

//     return user;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const updateUser = async (id, data) => {
//   try {
//     const user = await UserModel.findByIdAndUpdate(id, data, { new: true });
//     return user;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deleteUser = async (id) => {
//   try {
//     const user = await UserModel.findByIdAndDelete(id);
//     return user;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const userModel = {
//   create: createNewUser,
//   findOne: getOneUser,
//   findByEmail: getUserByEmail,
//   update: updateUser,
//   delete: deleteUser,
// };
