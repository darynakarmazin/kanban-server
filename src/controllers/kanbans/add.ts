import { Request, Response, NextFunction } from "express";
import Kanban from "../../models/kanban";
import kanbanSchema from "../../schemas/kanban";

const add = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error } = kanbanSchema.validate(req.body);
    if (error) {
      res.status(400).json({
        status: "error",
        code: 400,
        message: "missing required field",
      });
      return;
    }
    const newKanban = await Kanban.create(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: { result: newKanban },
    });
  } catch (error) {
    next(error);
  }
};

export default add;
