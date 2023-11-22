// Register endpoint
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../lib/mongodb';
import User from '../model/User';

// Connect to MongoDB
connectToDatabase();

// Register user
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
}
