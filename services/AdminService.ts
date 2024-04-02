import AdminRepository from "../repositories/AdminRepository";
import { TUser } from "../models/User";
import { TOption } from "../types/TProduct";

export default class AdminService {
  adminRepository = new AdminRepository();

  async login(id: string, password: string, type: number) {
    const admin: TUser | null = await this.adminRepository.getAdmin();

    if (!admin) throw new Error("ERROR : no admin");

    if (admin.id === id && admin.password === password && admin.type === type)
      return true;
    else throw new Error("ERROR: unauthorized");
  }

  async createProductPostId() {
    return await this.adminRepository.createProductPostId();
  }

  async createProductPost(
    id: string,
    title: string,
    thumbnail: string,
    option: TOption[],
    content: string
  ) {
    return await this.adminRepository.createProductPost(
      id,
      title,
      thumbnail,
      option,
      content
    );
  }
}
