import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

const getPublicKey = () => {
  try {
    const publicKey = fs.readFileSync('./keys/public.pem', 'utf8');
    return publicKey;
  } catch (error) {
    console.error('Error fetching public key:', error);
    throw new Error('Error fetching public key');
  }
};

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    // Get the public key
    const publicKey = getPublicKey();

    res.status(200).json({ publicKey });
  } catch (error) {
    res.status(500).json({ message: 'Error occurred' });
  }
}
