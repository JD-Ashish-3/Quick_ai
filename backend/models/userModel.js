import mongoose from 'mongoose';

const creationSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  prompt: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  publish: {
    type: Boolean,
    default: false
  },
  likes: {
    type: [String],
    default: []
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const UserModel = mongoose.model('User', creationSchema);

export default UserModel;
