import Role from '../model/role.model.js';
import User from '../model/user.model.js';
import { generateHash } from '../lib/hashPassword.js';
import { generatePassword } from '../lib/generatePassword.js';
import transporter from '../lib/sendMail.js'
//register
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
      password: hashPass,
      flat: role.role === 'resident' ? flatId : undefined,
    });

    transporter.sendMail({
        
    })
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
