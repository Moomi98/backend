import mongoose, { Schema } from "mongoose";

export type TUser = {
  id: string;
  password: string;
  type: number; // 0 : admin, 1 : user
};

const UserSchema = new Schema<TUser>(
  {
    id: { type: String, required: true },
    password: { type: String, required: true },
    type: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<TUser>("User", UserSchema);

export default User;
