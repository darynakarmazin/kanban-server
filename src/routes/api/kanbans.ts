import express from "express";
import getAll from "../../controllers/kanbans/getAll";
import add from "../../controllers/kanbans/add";
import getById from "../../controllers/kanbans/getById";
const router = express.Router();

router.get("/", getAll);

router.get("/:kanbanId", getById);

router.post("/", add);

export default router;
