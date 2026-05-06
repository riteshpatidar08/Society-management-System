import mongoose from 'mongoose';
import Flat from '../model/flat.model.js';

const flats = [];

// Generating 30 documents
const blocks = ['A', 'B', 'C'];

let isOccupiedToggle = false; // 👈 toggle variable

for (const block of blocks) {
  for (let floor = 1; floor <= 5; floor++) {
    for (let num = 1; num <= 2; num++) {
      isOccupiedToggle = !isOccupiedToggle; // flip value each time

      flats.push({
        flatNumber: floor * 100 + num,
        block: block,
        floor: floor,
        isOccupied: isOccupiedToggle
      });
    }
  }
}

const seedFlats = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://riteshpatidar088:q7bRXvvZiLsqgccO@cluster0.b2vgi2d.mongodb.net/sms?appName=Cluster0'
    );

    console.log('Connection is up');

    await Flat.deleteMany({});
    console.log('Existing flats cleared');

    const newFlats = await Flat.insertMany(flats);

    console.log(`Successfully seeded ${newFlats.length} flats.`);
    process.exit(0);

  } catch (error) {
    console.error('Error seeding flats:', error);
    process.exit(1);
  }
};

seedFlats();