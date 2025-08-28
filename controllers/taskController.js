const tasks = require('../ds.js');


function displayAllTask(req,res){
    res.json(tasks);
}

function addTask(req,res){
    const newTask = req.body;
    tasks.push(newTask);
    res.json({
        message:"task inserted",newTask
    });
};

function editTask(req,res){
    const id = parseInt(req.params.id);
    const editTask = req.body;
    const taskindex = tasks.findIndex(t => t.id == id);

    tasks[taskindex] = { ...tasks[taskindex], ...editTask };

    res.json({
        message:"task updated",editTask
    })
    
}

function deleteTask(req,res){
    const id = parseInt(req.params.id);
    const taskindex = tasks.findIndex(t =>t.id == id);

    if(taskindex === -1){
        return res.status(404).json(
            {
                message:"invalid id check your id again.."
            }
        )
    }

    tasks.splice(taskindex,1);

    res.json({
        message:"task has been removed"
    });
}

module.exports={
    displayAllTask,
    addTask,
    editTask,
    deleteTask,
}