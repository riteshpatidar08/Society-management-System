import mongoose from 'mongoose';
import Complaint from '../model/complaint.model.js';

const complaints = [
  {
    title: 'Ceiling Leakage',
    description: 'There is a major leakage in the kitchen ceiling from the flat above. Please investigate urgently.',
    status: 'pending',
    resident: '69f0605599330d338b201b99', // Harshit Choudhary
  },
  {
    title: 'Noise Complaint',
    description: 'Loud music is being played in the flat next door late at night, causing disturbance.',
    status: 'in-progress',
    resident: '69f0605599330d338b201b99',
  },
  {
    title: 'Garbage Collection Issue',
    description: 'The garbage collection staff has not visited our block for the past two days.',
    status: 'pending',
    resident: '69f0605599330d338b201b99',
  },
  {
    title: 'Parking Light Broken',
    description: 'The street light near my parking spot (A-102) is flickering and mostly stays off.',
    status: 'resolved',
    resident: '69f0605599330d338b201b99',
  },
  {
    title: 'Intercom Malfunction',
    description: 'My intercom is not working, I am unable to receive calls from the security gate.',
    status: 'pending',
    resident: '69f0605599330d338b201b99',
  }
];

const seedComplaints = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://riteshpatidar088:q7bRXvvZiLsqgccO@cluster0.b2vgi2d.mongodb.net/sms?appName=Cluster0'
    );

    console.log('Database connected for complaint seeding');

    await Complaint.deleteMany({});
    console.log('Existing complaints cleared');

    const newComplaints = await Complaint.insertMany(complaints);
    console.log(`Successfully seeded ${newComplaints.length} complaints.`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding complaints:', error);
    process.exit(1);
  }
};

seedComplaints();
