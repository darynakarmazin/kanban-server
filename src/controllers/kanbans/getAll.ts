import { Request, Response, NextFunction } from "express";
import Kanban from "../../models/kanban";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const kanbans = await Kanban.find({});
    res.json({
      status: "success",
      code: 200,
      data: { result: kanbans },
    });
  } catch (error) {
    next(error);
  }
};

export default getAll;
