import bcrypt from 'bcrypt';
import { connectToDatabase } from '../../lib/mongodb';
import User from '../../../../handcrafted-haven/src/model/user';

import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
const fs = require('fs');

// Connect to MongoDB
connectToDatabase();

// Function to decrypt the password
const decryptPassword = (encryptedPassword: string): string => {
  try {
    // Decode the Base64 string to a buffer
    const encryptedBuffer = Buffer.from(encryptedPassword, 'base64');

    // Read the private key
    const privateKey = fs.readFileSync('./keys/public.pem', 'utf8');
    console.log(privateKey);

    // Decrypt the password
    const decryptedData = crypto.privateDecrypt(
      {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
      },
      encryptedBuffer
    );

    // Convert the decrypted buffer to a string
    const decryptedPassword = decryptedData.toString('utf8');

    return decryptedPassword;
  } catch (error) {
    console.error('Decryption failed:', error);
    throw new Error('Decryption failed');
  }
};

// Login user
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Decrypt the password received from the client
    const decryptedPassword = await decryptPassword(password);

    // Compare the decrypted password with the stored hashed password using bcrypt
    const isPasswordValid = await bcrypt.compare(decryptedPassword, user.password);
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
