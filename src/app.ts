import express, { Request, Response } from "express";
const app = express();
const port = 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  return console.log(`Server running. Use our API on port:${port}`);
});
