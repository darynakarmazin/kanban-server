import express from "express";
import getAll from "../../controllers/kanbans/getAll";
import add from "../../controllers/kanbans/add";
const router = express.Router();

router.get("/", getAll);
router.post("/", add);

export default router;
