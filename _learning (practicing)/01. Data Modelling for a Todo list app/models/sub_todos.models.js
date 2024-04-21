/** @format */

import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const SubTodo = mongoose.model('SubTodo', subTodoSchema);
