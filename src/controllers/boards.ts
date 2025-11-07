import { listBoards } from "../models/boards/operations";

export const getAllBoards = async () => 
    await listBoards();

module.exports = { getAllBoards };