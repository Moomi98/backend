import User from "../models/User";

export default class AdminRepository {
  async getAdmin() {
    return await User.findOne({ type: 0 });
  }
}
