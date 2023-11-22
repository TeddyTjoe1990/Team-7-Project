// mongodb.ts
import mongoose from 'mongoose';

export async function connectToDatabase() {
  try {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      throw new Error('MongoDB connection string is not defined in environment variables.');
    }

    await mongoose.connect(mongoURI, {});
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}