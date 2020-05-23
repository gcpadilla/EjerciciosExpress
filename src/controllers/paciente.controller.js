const mongoose = require("mongoose");
const { validationResult } = require("express-validator");
const PacienteModel = require("../models/paciente.model");

exports.createPaciente = async (req, res) => {
	console.log(req.body)
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}

	const paciente = new PacienteModel(req.body);


	try {
		await paciente.save();
		res.send(paciente);
	} catch (err) {
		res.status(500).send(err);
	}
};

exports.getPaciente = async (req, res) => {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			return res.status(404).json({ message: "Paciente not found." });
		}

		const paciente = await PacienteModel.findById(req.params.id);
		// .sort('<field>')

		if (!paciente) {
			return res.status(404).json({ message: "Paciente not found." });
		}

		res.send(paciente);
	} catch (err) {
		res.status(500).send(err);
	}
};

exports.getAllPacientes = async (req, res) => {
	try {
		const pacientes = await PacienteModel.find({});
		res.send(pacientes);
	} catch (err) {
		res.status(500).send(err);
	}
};

exports.updatePaciente = async (req, res) => {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			return res.status(404).json({ message: "Paciente not found." });
		}

		const paciente = await PacienteModel.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		// .sort('<field>')

		if (!paciente) {
			return res.status(404).json({ message: "Paciente not found." });
		}

		res.send(paciente);
	} catch (err) {
		res.status(500).send(err);
	}
};

exports.deletePaciente = async (req, res) => {
   console.log(req.params.id);
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			return res.status(404).json({ message: "Paciente not found." });
		}

		const paciente = await PacienteModel.findByIdAndDelete(req.params.id);

		if (!paciente) {
			return res.status(404).json({ message: "Paciente not found." });
		}

		return res
			.status(200)
			.send({ message: "The paciente has been successfully deleted" });
	} catch (err) {
		res.status(500).send(err);
	}
};
