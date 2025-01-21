import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    tags: {
      type: [String], // Tags for categorization (e.g., 'Anxiety', 'Motivation')
      default: [],
    },
    reactions: {
      type: Map, // Using a Map for different reaction types
      of: Number, // Number of reactions for each type (e.g., "like": 10, "support": 5)
      default: new Map(),
    },
    comments: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        content: { type: String, required: true, trim: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    isAnonymous: {
      type: Boolean, // Indicates if the post is made anonymously
      default: false,
    },
    location: {
      type: String, // Optional field for location-based posts
      trim: true,
    },
    reactions: { type: Map, of: Number, default: new Map() },
    isAnonymous: { type: Boolean, default: false },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
  }
);

export const Post = mongoose.model('Post', postSchema);