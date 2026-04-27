import mongoose from 'mongoose' 
import Flat from '../model/flat.model.js';

const flats = [];

// Generating 30 documents: 3 blocks (A, B, C) x 5 floors x 2 flats per floor
const blocks = ['A', 'B', 'C'];
for (const block of blocks) {
  for (let floor = 1; floor <= 5; floor++) {
    for (let num = 1; num <= 2; num++) {
      flats.push({
        flatNumber: floor * 100 + num, // e.g., 101, 102, 201...
        block: block,
        floor: floor,
      });
    }
  }
}

const seedFlats = async () => {
  try {
    const connection = await mongoose.connect(
      'mongodb+srv://riteshpatidar088:q7bRXvvZiLsqgccO@cluster0.b2vgi2d.mongodb.net/sms?appName=Cluster0'
    );
    console.log('Connection is up');

    // Optional: Clear existing flats before seeding
    // await Flat.deleteMany({});
    // console.log('Existing flats cleared');

    const newFlats = await Flat.insertMany(flats);
    console.log(`Successfully seeded ${newFlats.length} flats.`);
    console.log(newFlats);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding flats:', error);
    process.exit(1);
  }
};

seedFlats();
