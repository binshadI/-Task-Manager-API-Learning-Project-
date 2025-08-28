const express = require('express');
 const router = express.Router();
const { displayAllTask,addTask,editTask,deleteTask } = require("../controllers/taskController")


router.get('/display',displayAllTask);
router.post('/add',addTask);
router.put('/edit/:id',editTask);
router.delete("/remove/:id",deleteTask);
module.exports = router;