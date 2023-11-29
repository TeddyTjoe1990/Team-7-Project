// User.ts
import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

export interface UserDocument extends Document {
  email: string;
  password: string;
}

const userSchema = new Schema<UserDocument>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash password before saving to the database
userSchema.pre<UserDocument>('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

export default mongoose.models.User || mongoose.model<UserDocument>('User', userSchema);
