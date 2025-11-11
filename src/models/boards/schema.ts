import { Schema, model } from "mongoose";

const boardShema = new Schema({
      name: {
          type: String,
          required: [true, 'Set name for board'],
      },
});

const BoardModel = model ("board", boardShema);

export default BoardModel;