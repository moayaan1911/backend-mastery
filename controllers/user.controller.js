/** @format */

import { User } from '../models/user.model.js';
import { APIError } from '../utils/error_class.js';
import { uploadFileToServer } from '../utils/file_upload.js';
import { higherOrderFunction } from '../utils/higher_order_function.js';
import { APIResponse } from '../utils/response_class.js';

export const registerUser = higherOrderFunction(async (req, res) => {
  const { fullName, email, username, password } = req.body;
  if (fullName === '') {
    throw new APIError(400, 'fullName is required', [], '');
  }
  if (email === '') {
    throw new APIError(400, 'email is required', [], '');
  }
  if (username === '') {
    throw new APIError(400, 'username is required', [], '');
  }
  if (password === '') {
    throw new APIError(400, 'password is required', [], '');
  }

  const userExists = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (userExists) {
    throw new APIError(409, 'user already exists', [], '');
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;
  if (!avatarLocalPath) {
    throw new APIError(400, 'avatar is required', [], '');
  }
  const avatar = await uploadFileToServer(avatarLocalPath);
  const coverImage = await uploadFileToServer(coverImageLocalPath);
  if (!avatar) {
    throw new APIError(400, 'avatar upload failed', [], '');
  }

  const user = await User.create({
    fullName,
    email,
    username,
    password,
    avatar: avatar.url,
    coverImage: coverImage?.url || '',
  });
  const createUser = await User.findById(user._id).select(
    '-password -refreshToken'
  );

  if (!createUser) {
    throw new APIError(
      500,
      'Something went wrong while creating the user',
      [],
      ''
    );
  }

  return res.status(201).json(
    new APIResponse({
      data: createUser,
      statusCode: 201,
      message: 'User Created Succesfully',
    })
  );
});
