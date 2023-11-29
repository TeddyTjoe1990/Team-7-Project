// Register endpoint
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';
import User from '../../../../handcrafted-haven/src/model/user';

// Connect to MongoDB
connectToDatabase();

// Register user
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  try {
    console.log('Attempting to find existing user...');
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log('User already exists:', existingUser);
      return res.status(400).json({ message: 'User already exists' });
    }

    console.log('Creating new user...');
    const newUser = new User({ email, password });
    await newUser.save();

    console.log('User created successfully:', newUser);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
}

