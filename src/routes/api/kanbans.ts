import express from "express";
import getAll from "../../controllers/kanbans/getAll";
import add from "../../controllers/kanbans/add";
import getById from "../../controllers/kanbans/getById";
import removeById from "../../controllers/kanbans/removeById";
const router = express.Router();

router.get("/", getAll);

router.get("/:kanbanId", getById);

router.post("/", add);

router.delete("/:kanbanId", removeById);

export default router;
