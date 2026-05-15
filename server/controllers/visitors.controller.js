import User from '../model/user.model.js';
import Visitor from '../model/visitors.model.js';
export const registerVisitor = async (req, res) => {
  try {
    const { name, type, phone, purpose, flatId, userId } = req.body;
    console.log(flatId);
    const user = await User.findOne({ flat: flatId });
    console.log(user);
    if (!user) return res.status(404).json({ message: 'Resident not found' });
    const visitor = await Visitor.create({
      name,
      email,
      phone,
      flat: flatId,
      purpose,
      registeredBy: userId,
    });
    // sendNotification(visitor)
  } catch (error) {
    console.log(error);
  }
};

//accpet and reject the visitor

export const updateVisitorStatus = async (req, res) => {
  try {
    const { visitorId, action } = req.body;
    const visitor = await Visitor.findById(visitorId);

    visitor.status = action; //accepted , rejected;

    if (action === 'accepted') visitor.checkIn = new Date();
    await visitor.save();
  } catch (error) {
    console.log(error);
  }
};
