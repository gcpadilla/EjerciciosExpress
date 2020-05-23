const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const pacienteController = require("../controllers/paciente.controller");

router.post(
	"/",
	[
		check("Mascota", "Mascota cannot be null").notEmpty(),
	],
	pacienteController.createPaciente
);
router.get("/", pacienteController.getAllPacientes);
router.get("/:id", pacienteController.getPaciente);
router.put("/:id", pacienteController.updatePaciente);
router.delete("/:id", pacienteController.deletePaciente);

module.exports = router;
