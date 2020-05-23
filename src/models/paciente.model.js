// const { Schema, model } = require("mongoose");

// const schema = new Schema({
// 	fullName: String,
// 	title: String,
// 	department: String,
// 	pic: String,
// });

// module.exports = model("pacientes", schema);

//******************************************************************************************
const mongoose = require("mongoose");

const PacienteSchema = new mongoose.Schema(
	{
        Mascota: {
			type: String,
			required: true,
		  },
        Duenio: {
			type: String,
			required: true,
		  },
        Fecha: {
			type: String,
			required: true,
		  },
        Hora: {
			type: String,
			required: true,
		  },
        Sintomas: String,
	},
	{ versionKey: false }
);

const PacienteModel = mongoose.model("pacientes", PacienteSchema);

module.exports = PacienteModel;
