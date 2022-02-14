"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("./controller/user.controller"));
const app = (0, express_1.default)();
const port = process.env.PORT || 9000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/user", user_controller_1.default);
app.listen(port, () => console.log(`server is running on ${port}`));
