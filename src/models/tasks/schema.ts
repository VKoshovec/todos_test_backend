import { Schema, model } from "mongoose";

const taskShema = new Schema({
      board_id: {
        type: String,
        required: [true, 'Set board_id for task'],
      },
      name: {
        type: String,
        required: [true, 'Set name for task'],
      },
      status: {
        type: String,
        required: [true, 'Set status for task'],
      }
});

const TaskModel = model ("task", taskShema);

export default TaskModel;