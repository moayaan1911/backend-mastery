/** @format */

import { higherOrderFunction } from '../utils/higher_order_function.js';

export const registerUser = higherOrderFunction(async function (req, res) {
  res.status(200).json({ message: 'OK' });
});
