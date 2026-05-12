import User from '../model/user.model.js';
import { generateHash } from '../lib/hashPassword.js';

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find().populate('role').populate('flat').select('-password');
    res.status(200).json({
      message: 'success',
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export const deactivateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }
    res.status(200).json({
      message: 'User deactivated successfully',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate('role').populate('flat');
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }
    res.status(200).json({
      message: 'success',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    if (updateData.password) {
      updateData.password = await generateHash(updateData.password);
    }

    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    })
      .populate('role')
      .populate('flat');

    if (!updatedUser) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    res.status(200).json({
      message: 'User updated successfully',
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};




//problem = 1 routing nested (strategy ready for the dashboard routing);
//role slice with api integration + flat slice with api integration  (be ready)
 //chakra ui setup krke aana hain in the manage user page you have use the getAlluser api and show the list of user in the table
