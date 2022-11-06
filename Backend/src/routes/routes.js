const { Router } = require("express");
const router = Router();
const verifyToken = require("../auth/verifyToken");
const userController = require("../controllers/usersController");
const perisController = require("../controllers/peripheralsController");
const pcController = require("../controllers/PcController");
const casoController = require("../controllers/casoController")


require("dotenv").config({ path: "variables.env" });

// --
router.get("/", (req, res) => res.send("Hello Word"));

//Rutas usuario
router.get("/get-users", verifyToken, userController.getUsers);
router.get("/get-user/:id", verifyToken, userController.getUserById);
router.put("/update-user/:id", verifyToken, userController.updateUser);
router.post("/create-user", verifyToken, userController.signup);
router.post("/signin", userController.signin);
router.delete("/delete-user/:id", verifyToken, userController.deleteUser);

//rutas PC
router.post("/create-pc", verifyToken, pcController.crearPc);
router.get("/get-pcs", verifyToken, pcController.obtenerPcs);
router.put("/update-pc/:id", verifyToken, pcController.actualizarPc);
router.get("/get-pcs/:id", verifyToken, pcController.obtenerPc);
router.delete("/delete-pc/:id", verifyToken, pcController.eliminarPc);

//Rutas perisfericos
router.post("/create-Peripherals", verifyToken, perisController.createPeris);
router.get("/get-Peripherals", verifyToken, perisController.obtenerPeris);
router.put("/update-Peripherals/:id", verifyToken, perisController.actualizarPeris);
router.get("/get-Peripherals/:id", verifyToken, perisController.obtenerPeriById);
router.delete("/delete-Peripherals/:id", verifyToken, perisController.eliminarPeris);

//Rutas Casos
router.post("/create-caso", verifyToken, casoController.crearCaso);
router.get("/get-casos", verifyToken, casoController.getCasos);
router.put("/update-caso/:id", verifyToken, casoController.anadirSeguimiento);
router.get("/get-caso/:id", verifyToken, casoController.getCasoById);
router.delete("/delete-caso/:id", verifyToken, casoController.eliminarCaso);
router.get("/cerrar-caso/:id", verifyToken, casoController.cerrarCaso);

module.exports = router;
