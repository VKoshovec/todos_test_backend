import { Schema, model } from "mongoose";

const board = new Schema({
    title: {
			type: String,
			required: [true, "Set title"],
		},
});

const BoardModel = model ("board", board);

export default BoardModel;