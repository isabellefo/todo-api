const TodoService = require("../services/TodoService");
const todoService = require("../services/TodoService");

exports.get = async (req, res) =>{
    try {
        const task = await TodoService.getTasksById(req.params.id);
        if(!task){
            return res.status(404).json("There are task with this id!")
        }
    
        res.json(task);
        
    } catch (error) {
        return res.status(500).json({ error: err });
    }
   
}

exports.getAll = async (req, res) =>{
    try {
        const allTasks = await TodoService.getAllTasks();
        
        if(!allTasks){
            return res.status(404).json("There are no task published yet!")
        }

        res.json(allTasks);
        
    } catch (err) {
        return res.status(500).json({ error: err });
    }
    
}

exports.add = async (req, res) =>{
    try {
        const createdTask = await TodoService.addTask(req.body);
        res.status(201).json(createdTask);
    } catch (err) {
        return res.status(500).json({error: err});
    }
}

exports.update = async (req, res) =>{
   try {
     const updatedTask = await TodoService.updateTask(req.body, req.params.id);
     res.status(200).json(updatedTask);
   } catch (error) {
    return res.status(500).json({error: err});
   }
}

exports.delete = async (req, res) =>{
    try {
        const deletedTask = await TodoService.deleteTask(req.params.id);
        res.status(200).json(deletedTask);
    } catch (error) {
        return res.status(500).json({error: err});
    }
}