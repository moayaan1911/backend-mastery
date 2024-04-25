/** @format */

import { higherOrderFunction } from '../utils/higher_order_function.js';

export const registerUser = higherOrderFunction(async (req, res) => {
  res.status(200).json({ message: 'OK' });
});
