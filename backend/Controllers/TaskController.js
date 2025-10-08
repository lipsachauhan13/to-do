import { Task } from "../Model/TaskModel.js";

export const addTask = async (req, res) => {
    const { title, description, dueDate,  category } = req.body;
    try {
        const tasks = await Task.create({ title, description, dueDate,category });

        res.status(201).json({ msg: 'task created', id: tasks.id, title: tasks.title, description: tasks.description, dueDate: tasks.dueDate, category: tasks.category });
    } catch (err) {
        res.status(500).json({
            msg: 'error createing task', error: err.message
        });
    }
};

export const getAllTask = async(req, res) =>{
    try{
        const tasks = await Task.findAll();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ msg: 'Error retrieving task', error: err.message });
    }
};

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, dueDate, category } = req.body;

        const tasks = await Task.findByPk(id);

        if (!tasks) {
            return res.status(404).json({ msg: 'task not found' });
        }
        tasks.title = title;
        tasks.description = description;
        tasks.dueDate = dueDate;
        tasks.category = category;

        await tasks.save();
        res.status(200).json({ msg: 'Task updated', tasks });
    } catch (err) {
        res.status(500).json({ msg: 'Error updating task', error: err.message });
    }
};


export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        const tasks = await Task.findByPk(id);

        if (!tasks) {
            return res.status(404).json({ msg: 'tasks not found' });
        }

        await tasks.destroy();
        res.status(200).json({ msg: 'Task deleted', tasks });
    } catch (err) {
        res.status(500).json({ msg: 'Error deleting Task', error: err.message });
    }
};