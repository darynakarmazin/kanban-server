import express from "express";
import getAll from "../../controllers/kanbans/getAll";
const router = express.Router();

router.get("/", getAll);

export default router;
