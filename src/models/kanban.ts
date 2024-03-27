import { Schema, model } from "mongoose";

const boardSchema = new Schema({
  title: { type: String, required: true },
  items: { type: Array, default: [] },
});

const kanbanSchema = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    boards: {
      type: [boardSchema],
      required: true,
      default: [
        { title: "ToDo", items: [] },
        { title: "In Progress", items: [] },
        { title: "Done", items: [] },
      ],
    },
  },
  { versionKey: false, timestamps: true }
);

const Kanban = model("kanban", kanbanSchema);

export default Kanban;
