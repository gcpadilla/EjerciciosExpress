//************************************************************************************************************
require("dotenv").config();

const express = require("express");
//const cors = require("cors");
const morgan = require("morgan");
const app = express();
const port = 3000;

//app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

require("./database");

const empleadosRoutes = require("./routes/empleado.routes");
const pacientesRoutes = require("./routes/paciente.routes");

app.use("/api/v1/empleados/", empleadosRoutes);
app.use("/api/v1/pacientes/", pacientesRoutes);

app.use(function (req, res, next) {
	res.status(404).json({ message: "Sorry can't find that!" });
});

app.listen(port, () =>
	console.log(`app listening at http://localhost:${port}`)
);
// DB_HOST=localhost
// DB_NAME=Ejercicios
// SECRET_KEY=