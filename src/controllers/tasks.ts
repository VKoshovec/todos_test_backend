import { Request, Response } from "express";
import TaskModel from "../models/tasks/schema";

async function getAllTasks ( req: Request, res: Response) { 

    const board_Id = req.params;

    const result = await TaskModel.find(board_Id);
    res.json(result);

};

async function createTask ( req: Request, res: Response) { 

    const board_Id = req.params;
    const status = "1";
    const { name } = req.body; 

    const result = await TaskModel.create({ board_Id, name, status });
    res.json(result);

};

async function delTask ( req: Request, res: Response) { 

    const taskId = req.params; 

    const result = await TaskModel.findByIdAndDelete(taskId);

    if(!result) { 
        res.status(404);
    } 
    else {
        res.status(200).json({
        "message": "task deleted"
        });
    };

};

async function updTask ( req: Request, res: Response) { 

    const taskId = req.params; 

    const { status } = req.body;

    const result = await TaskModel.findByIdAndUpdate(taskId, { status });
    if(!result) { 
        res.status(404);
    } 
    else {
        res.status(200).json({
        "message": "task updated"
        });
    };

};

export default { getAllTasks, createTask, delTask, updTask };