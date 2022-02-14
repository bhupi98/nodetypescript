import express from "express";
import userController from "./controller/user.controller";
const app = express();
const port = process.env.PORT || 9000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user", userController);

app.listen(port, () => console.log(`server is running on ${port}`));
