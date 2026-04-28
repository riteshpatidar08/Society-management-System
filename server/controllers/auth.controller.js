import Role from '../model/role.model.js';
import User from '../model/user.model.js';
import { generateHash } from '../lib/hashPassword.js';
import { generatePassword } from '../lib/generatePassword.js';
import transporter from '../lib/sendMail.js';
//register
import { newUserRegistrationTemplate } from './../templates/NewUserRegistration.js';
export const register = async (req, res) => {
  try {
    const { name, email, phone, roleId, flatId } = req.body;

    const user = await User.findOne({ email });
    console.log(user);

    if (user) {
      return res.status(400).json({
        message: `User already exist with ${email}, Please try with another email`,
      });
    }

    const role = await Role.findById(roleId);
    console.log(role);

    if (role.role === 'resident') {
      if (!flatId) {
        return res.status(400).json({
          message: `flat details are required for the ${role.role}`,
        });
      }
    }
    const password = generatePassword(8);
    const hashPass = await generateHash(password);
    console.log(password, hashPass);

    const NewUser = await User.create({
      name,
      email,
      phone,
      role: roleId,
      password: hashPass,
      flat: role.role === 'resident' ? flatId : undefined,
    });

    const alluserData = await User.findById(NewUser._id).populate('role');
    console.log(alluserData);

    await transporter.sendMail({
      from: `SMS TEAM ${process.env.SMTP_USER}`,
      to: NewUser.email,
      subject: '',
      html: newUserRegistrationTemplate(password, NewUser.name),
    });

    res.status(201).json({
      message: 'success',
      data: alluserData,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};

//login
export const login = async (req, res) => {
  try {
  } catch (error) {}
};

//role apis  + flat data seed uski api
