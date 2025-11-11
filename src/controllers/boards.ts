import { Request, Response } from "express";
import BoardModel from "../models/boards/schema";
import { now } from "mongoose";

async function getAllBoards ( req: Request, res: Response) { 

      const result = await BoardModel.find();
      res.json(result);
};

async function createBoard ( req: Request, res: Response) { 

    //   const { name } = req.params;
    //   const defaultName:string = "";

    //   if (!name) {
    //     const defaultName = "Board " + Date.now();

    //   } else {
    //     const defaultName = name;
    //   }

      const result = await BoardModel.create({ ...req.body });
      res.json(result);
};

export default { getAllBoards, createBoard };