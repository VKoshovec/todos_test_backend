import { Request, Response } from "express";
import BoardModel from "../models/boards/schema";


async function getAllBoards ( req: Request, res: Response) { 

      const result = await BoardModel.find();
      res.json(result);
};

async function createBoard ( req: Request, res: Response) { 
      
    const result = await BoardModel.create({ ...req.body });
    res.json(result);
      
};

async function delBoard ( req: Request, res: Response) { 
      
    const { boardId } = req.params;

    const result = await BoardModel.findByIdAndDelete(boardId);

    if(!result) { 
        res.status(404);
    } 
    else {
        res.status(200).json({
        "message": "contact deleted"
        });
    };
      
};

export default { getAllBoards, createBoard, delBoard };