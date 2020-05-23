const mongoose = require("mongoose");
const { validationResult } = require("express-validator");
const EmpleadoModel = require("../models/empleado.model");

exports.createEmpleado = async (req, res) => {
	console.log(req.body)
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}

	const empleado = new EmpleadoModel(req.body);

	try {
		await empleado.save();
		res.send(empleado);
	} catch (err) {
		res.status(500).send(err);
	}
};

exports.getEmpleado = async (req, res) => {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			return res.status(404).json({ message: "Empleado not found." });
		}

		const empleado = await EmpleadoModel.findById(req.params.id);
		// .sort('<field>')

		if (!empleado) {
			return res.status(404).json({ message: "Empleado not found." });
		}

		res.send(empleado);
	} catch (err) {
		res.status(500).send(err);
	}
};

exports.getAllEmpleados = async (req, res) => {
	try {
		const empleados = await EmpleadoModel.find({});
		res.send(empleados);
	} catch (err) {
		res.status(500).send(err);
	}
};

exports.updateEmpleado = async (req, res) => {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			return res.status(404).json({ message: "Empleado not found." });
		}

		const empleado = await EmpleadoModel.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		// .sort('<field>')

		if (!empleado) {
			return res.status(404).json({ message: "Empleado not found." });
		}

		res.send(empleado);
	} catch (err) {
		res.status(500).send(err);
	}
};

exports.deleteEmpleado = async (req, res) => {
   console.log(req.params.id);
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			return res.status(404).json({ message: "Empleado not found." });
		}

		const empleado = await EmpleadoModel.findByIdAndDelete(req.params.id);

		if (!empleado) {
			return res.status(404).json({ message: "Empleado not found." });
		}

		return res
			.status(200)
			.send({ message: "The empleado has been successfully deleted" });
	} catch (err) {
		res.status(500).send(err);
	}
};
