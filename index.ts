import express, { Request, Response } from "express";
const app = express();
const port = process.env.PORT || 9000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).json("hello,Bhupender");
});

app.listen(port, () => console.log(`server is running on ${port}`));
