import Role from '../model/role.model.js';
import User from '../model/user.model.js';
import { comparePassword, generateHash } from '../lib/hashPassword.js';
import { generatePassword } from '../lib/generatePassword.js';
import transporter from '../lib/sendMail.js';
//register
import { newUserRegistrationTemplate } from './../templates/NewUserRegistration.js';
import { generateToken } from '../lib/generateToken.js';

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
    const { email, password } = req.body;
    const user = await User.findOne({ email }).populate('role');
    console.log(user);
    if (!user) {
      return res.status(400).json({
        message: 'User is not registered , please register try again',
      });
    }
    console.log(password, user.password);
    const isPassword = await comparePassword(password, user.password);
    console.log(isPassword);
    if (!isPassword) {
      return res.status(401).json({
        message: 'Password is incorrect',
      });
    }
    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role.role,
    };
    const token = generateToken(payload);
    console.log(token);

    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
    });

    res.status(200).json({
      message: 'Login successfull',
    });
  } catch (error) {
    console.log(error);
  }
};

export const verify = async(req,res)=>{

  res.send('running')
}


//role apis  + flat data seed uski api

//registration with mail //
//role api crud//
//flat api crud //

//login => success => verify => token => middleware => controller => res.send(authentic : true)

