import Role from '../model/role.model.js';
import User from '../model/user.model.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserData = {
  name: 'System Admin',
  email: 'riteshpatidar088@gmail.com',
  password: await bcrypt.hash('password123', 12),
  role: '69e9c4b253055556100dee97',
};

const seedUser = async () => {
  try {
    const connection = await mongoose.connect(
      'mongodb+srv://riteshpatidar088:q7bRXvvZiLsqgccO@cluster0.b2vgi2d.mongodb.net/sms?appName=Cluster0'
    );
    console.log('connection is up');

    const newUser = await User.insertOne(UserData);
    console.log(newUser);
  } catch (error) {
    console.log(error);
  }
};

seedUser();

//create role api
// update role api => solution
//get role
// delete role => solution
