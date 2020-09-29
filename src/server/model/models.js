import mongoose from 'mongoose';

const itemScheme = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const Movies = mongoose.model('Movies', itemScheme);
const Shows = mongoose.model('Shows', itemScheme);

export const models = { Movies, Shows };
