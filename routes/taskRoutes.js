const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const role = require("../middleware/role");

const taskController = require("../controllers/taskController");

// DEBUG (add this temporarily)
console.log("auth:", typeof auth);
console.log("createTask:", typeof taskController.createTask);

router.post("/", auth, taskController.createTask);
router.get("/", auth, taskController.getTasks);
router.delete("/:id", auth, role("admin"), taskController.deleteTask);

module.exports = router;