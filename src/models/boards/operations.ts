import BoardModel from "./schema";

export const listBoards = async() =>
    await BoardModel.find();


module.exports = { listBoards };