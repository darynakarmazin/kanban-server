import { Schema, model } from "mongoose";

const kanbanSchema = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    boards: [
      {
        title: { type: String, required: true },
        items: [
          {
            title: { type: String, required: true },
            description: { type: String },
          },
        ],
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const Kanban = model("kanban", kanbanSchema);

export default Kanban;
