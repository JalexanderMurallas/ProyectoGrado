const { Router } = require("express");
const jwt = require("jsonwebtoken");
const router = Router();
const verifyToken = require("../auth/verifyToken");
const userController = require("../controllers/usersController");
const perisController = require("../controllers/peripheralsController");
const pcController = require("../controllers/PcController");
require("dotenv").config({ path: "variables.env" });

// --
router.get("/", (req, res) => res.send("Hello Word"));

//Rutas usuario
router.get("/get-users", userController.getUsers);
router.get("/get-user/:id", userController.getUserById);
router.put("/update-user/:id", userController.updateUser);
router.post("/create-user", userController.signup);
router.post("/signin", userController.signin);
router.post("/tasks", userController.tasks);
router.get("/tasks", userController.tasks);
router.get("/private-tasks", verifyToken, userController.privatetasks); // imp
router.delete("/delete-user/:id", userController.deleteUser);

//rutas PC
router.post("/create-pc", verifyToken, pcController.crearPc);
router.get("/get-pcs", pcController.obtenerPcs);
router.put("/update-pc/:id", verifyToken, pcController.actualizarPc);
router.get("/get-pcs/:id", verifyToken, pcController.obtenerPc);
router.delete("/delete-pc/:id", verifyToken, pcController.eliminarPc);

//router.get('/private-tasks', verifyToken, pcController); // imp descomentar

//Rutas perisfericos
router.post("/create-Peripherals", verifyToken, perisController.createPeris);
router.get("/get-Peripherals", verifyToken, perisController.obtenerPeris);
router.put(
  "/update-Peripherals/:id",
  verifyToken,
  perisController.actualizarPeris
);
router.get(
  "/get-Peripherals/:id",
  verifyToken,
  perisController.obtenerPeriById
);
router.delete(
  "/delete-Peripherals/:id",
  verifyToken,
  perisController.eliminarPeris
);

module.exports = router;
