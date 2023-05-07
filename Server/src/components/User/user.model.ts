import mongoose from 'mongoose';
import validator from 'validator';
import { User } from './user.types';
import { HttpError } from '../../middlewares/error.handler.middleware';
import errorMessages from '../../utils/error-messages';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    validate(username: string) {
      if (validator.isEmpty(username)) throw HttpError(400, errorMessages.EMPTY('username'))
    }
  },
  email: {
    type: String,
    required: [true, errorMessages.REQUIRED('email address')],
    unique: true,
    trim: true,
    validate(email: string) {
      if (validator.isEmpty(email)) throw HttpError(400, errorMessages.EMPTY('email address'))
      else if (!validator.isEmail(email)) throw HttpError(400, errorMessages.NOT_VALID('email address'))
    }
  },
  password: {
    type: String,
    required: [true, errorMessages.REQUIRED('password')],
    minlength: [6, errorMessages.TOO_SHORT('password', 6)]
  },
  picture: {
    type: String,
    validate(picture: string) {
      if (!validator.isURL(picture)) throw HttpError(400, errorMessages.NOT_VALID('picture'))
    }
  },
  todos: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Todo"
    }
  ]
}, { timestamps: true });


const Model = mongoose.model<User>("User", UserSchema);

export type UserModel = typeof Model;

export default Model;
