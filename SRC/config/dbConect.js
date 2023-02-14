import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Karina:123@senac.soyka.mongodb.net/senac-node");

let db = mongoose.connection;

export default db;