// Login endpoint
import bcrypt from 'bcrypt';
import { connectToDatabase } from '../lib/mongodb';
import User from '../model/User';
import { NextApiRequest, NextApiResponse } from 'next';

// Connect to MongoDB
connectToDatabase();

// Login user
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a session/token for authentication
    // (using JWT, cookies, or any authentication mechanism)
    // ...

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in' });
  }
}
