const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const empleadoController = require("../controllers/empleado.controller");

router.post(
	"/",
	[
		check("fullName", "Title cannot be null").notEmpty(),
		check("fullName", "Allowed characters range from 10 to 40").isLength({
			min: 1,
			max: 40,
		}),
		check("title", "title cannot be null").notEmpty(),
	],
	empleadoController.createEmpleado
);
router.get("/", empleadoController.getAllEmpleados);
router.get("/:id", empleadoController.getEmpleado);
router.put("/:id", empleadoController.updateEmpleado);
router.delete("/:id", empleadoController.deleteEmpleado);

module.exports = router;
