import { UserModel } from "../models/user-model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { env } from "../settings/config.js";

export const ctrlCreateNewUser = async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const ctrlListUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    res.status(201).json(allUsers);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const ctrlFindOneUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await UserModel.findOne({ _id: userId });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const ctrlUpdateUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await UserModel.findOne({ _id: userId });
    user.set(req.body);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const ctrlDeleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await UserModel.findOne({ _id: userId });
    if (!user) return res.status(404).json({ message: "User not found" });
    await UserModel.deleteOne({ _id: userId });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// export const ctrlRegister = async (req, res) => {
//   const newUser = await userModel.create(req.body);
//   if (!newUser) return res.sendStatus(400);
//   const token = jwt.sign({ id: newUser.id }, env.JWT_SECRET);
//   res.status(201).json({ token });
// };

// export const ctrlLogin = async (req, res) => {
//   const { email, password } = req.body;
//   const user = userModel.findByEmail(email);
//   if (!user) return res.sendStatus(404);
//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return res.sendStatus(404);
//   const token = jwt.sign({ id: user.id }, env.JWT_SECRET);
//   res.status(201).json({ token });
// };

// export const ctrlGetUserById = async (req, res) => {
//   const { userId } = req.params;
//   const user = await userModel.findOne({ id: userId });
//   if (!user) return res.sendStatus(404);
//   res.status(200).json(user);
// };
