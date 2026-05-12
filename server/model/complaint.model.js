import mongoose from 'mongoose';

const complaintSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['pending', 'resolved', 'in-progress'],
    default: 'pending',
  },
  resident: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Complaint = mongoose.model('Complaint', complaintSchema);

export default Complaint;
