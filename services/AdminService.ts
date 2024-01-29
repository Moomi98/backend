import AdminRepository from "../repositories/AdminRepository";
import { TUser } from "../models/User";

export default class AdminService {
  adminRepository = new AdminRepository();

  async login(id: string, password: string, type: number) {
    const admin: TUser | null = await this.adminRepository.getAdmin();

    if (!admin) throw new Error("ERROR : no admin");

    if (admin.id === id && admin.password === password && admin.type === type)
      return true;
    else throw new Error("ERROR: unauthorized");
  }
}