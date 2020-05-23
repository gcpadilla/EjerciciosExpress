// const { Schema, model } = require("mongoose");

// const schema = new Schema({
// 	fullName: String,
// 	title: String,
// 	department: String,
// 	pic: String,
// });

// module.exports = model("empleados", schema);

//******************************************************************************************
const mongoose = require("mongoose");

const EmpleadoSchema = new mongoose.Schema(
	{
		fullName: String,
		title: String,
		department: String,
		pic: String,
	},
	{ versionKey: false }
);

const EmpleadoModel = mongoose.model("empleados", EmpleadoSchema);

module.exports = EmpleadoModel;
