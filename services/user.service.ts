import excuteQuery from "../config/db";
import { Request, Response } from "express";
import { User } from "../interfaces/user.interface";

export async function addUser(req: Request, res: Response) {
  try {
    let user: User;
    user = req.body;
    let sql = "insert into user(userName,userAge,userEmail)values(?,?,?)";
    let addedUser = await excuteQuery(sql, [
      user.userName,
      user.userAge,
      user.userEmail,
    ]);
    res.status(201).json(addedUser);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function getAllUsers(req: Request, res: Response) {
  try {
    let sql = "select * from user";
    let fetchedUsers = await excuteQuery(sql, []);
    res.status(200).json(fetchedUsers);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function getUserById(req: Request, res: Response) {
  try {
    let user_id: number = Number(req.params.user_id);
    let sql = "select * from user where user_id=?";
    let fetchedUserById = await excuteQuery(sql, [user_id]);
    res.status(200).json(fetchedUserById);
  } catch (err) {
    res.status(500).json(err);
  }
}
