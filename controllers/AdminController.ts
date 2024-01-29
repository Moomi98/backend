import { Request, Response, NextFunction } from "express";

import AdminService from "../services/AdminService";
import { TUser } from "../models/User";

export default class AdminController {
  adminService = new AdminService();

  login = async (req: Request, res: Response, next: NextFunction) => {
    const { id, password, type }: TUser = req.body;
    try {
      const admin = await this.adminService.login(id, password, type);

      res.status(200).send(admin);
    } catch (e) {
      res.status(401).send(e);
    }
  };
}
