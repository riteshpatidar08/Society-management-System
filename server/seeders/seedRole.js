import Role from '../model/role.model.js';
import mongoose from 'mongoose';

const roles = [
  {
    role: 'admin',
    roleDescription:
      'Manage users , assign flat to resident , generate bills , manage complaints',
      },
  {
    role: 'resident',
    roleDescription:
      'Raise complaints , track their complaints , accept visitor entry',
  },
  {
    role: 'security_guard',
    roleDescription: 'Visitor log , accept vistor entry',
  },
];

const seedRoles = async () => {
  try {
    const connection = await mongoose.connect(
      'mongodb+srv://riteshpatidar088:q7bRXvvZiLsqgccO@cluster0.b2vgi2d.mongodb.net/sms?appName=Cluster0'
    );
    console.log('connection is up')

    const newRoles = await Role.insertMany(roles);
    console.log(newRoles);
  } catch (error) {
    console.log(error);
  }
};


seedRoles()