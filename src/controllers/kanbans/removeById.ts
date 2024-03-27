import { Request, Response, NextFunction } from "express";
import Kanban from "../../models/kanban";

const removeById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { kanbanId } = req.params;
    const kanban = await Kanban.findByIdAndDelete(kanbanId);
    if (!kanban) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found",
      });
      return;
    }
    res.json({
      status: "success",
      code: 200,
      data: { result: kanban },
    });
  } catch (error) {
    next(error);
  }
};

export default removeById;
