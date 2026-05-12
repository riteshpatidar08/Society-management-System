import mongoose from 'mongoose';
import Notice from '../model/notice.model.js';

const notices = [
  {
    title: 'Monthly Maintenance Payment',
    description: 'Please pay your monthly maintenance fee by the 5th of next month to avoid late penalties.',
    postedBy: '69f2fb9cfbb3a20278033774', // System Admin (Ritesh)
    expiryDate: new Date('2026-06-05'),
  },
  {
    title: 'Society General Meeting',
    description: 'A general meeting for all residents will be held this Sunday at 10:00 AM in the clubhouse to discuss security upgrades.',
    postedBy: '69f2fb9cfbb3a20278033774',
    expiryDate: new Date('2026-05-18'),
  },
  {
    title: 'Elevator Maintenance',
    description: 'Elevator in Block A will be undergoing scheduled maintenance on Wednesday from 10:00 AM to 2:00 PM.',
    postedBy: '69f2fb9cfbb3a20278033774',
    expiryDate: new Date('2026-05-15'),
  },
  {
    title: 'Summer Festival Celebration',
    description: 'Join us for the Summer Festival celebration in the society garden on May 25th. Fun games and food for everyone!',
    postedBy: '69f2fb9cfbb3a20278033774',
    expiryDate: new Date('2026-05-26'),
  },
  {
    title: 'Water Supply Interruption',
    description: 'Due to pipe repairs, water supply will be interrupted on Friday from 1:00 PM to 4:00 PM. Please store water in advance.',
    postedBy: '69f2fb9cfbb3a20278033774',
    expiryDate: new Date('2026-05-16'),
  }
];

const seedNotices = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://riteshpatidar088:q7bRXvvZiLsqgccO@cluster0.b2vgi2d.mongodb.net/sms?appName=Cluster0'
    );

    console.log('Database connected for notice seeding');

    await Notice.deleteMany({});
    console.log('Existing notices cleared');

    const newNotices = await Notice.insertMany(notices);
    console.log(`Successfully seeded ${newNotices.length} notices.`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding notices:', error);
    process.exit(1);
  }
};

seedNotices();
