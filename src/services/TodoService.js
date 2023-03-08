const Task = require('../models/Task')

module.exports = class TodoService{

    static async getAllTasks(){

        try {
            const allTasks = await Task.find();
            return allTasks;
        } catch (error) {
            console.log(`Could not fetch tasks: ${error}`)
        }

    }

    static async getTasksById(id){

        try {
            const tasks = await Task.findById(id);
            return tasks;
        } catch (error) {
            console.log(`Could not fetch task: ${error}`)
        }

    }

    static async addTask(data){

        try {
            const newTask = {
                title: data.title,
                description: data.description,
                finished: data.finished,
                date: data.date,
            }
            const response = await new Task(newTask).save();
            return response;
        } catch (error) {
            console.log(`Could not add new todo: ${error}`)
        }

    }

    static async deleteTask(id){

        try {
            const response = await Task.deleteOne({ "_id" : id});
            return response;
        } catch (error) {
            console.log(`Could not delete task: ${error}`)
        }

    }

    static async updateTask(data, id){

        try {
            const updatedTask = { 
                title: data.title,
                description: data.description,
                finished: data.finished,
                date: data.date,
            }
            const response = await Task.findOneAndUpdate({"_id": id},updatedTask, {"upsert": true});
            return response;
        } catch (error) {
            console.log(`Could not update task: ${error}`)
        }

    }

}