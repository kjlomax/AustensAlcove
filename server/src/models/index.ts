import * as dotenv from 'dotenv';
dotenv.config();
import { BooksMore } from './books';
import {UserMore} from  './user'
import sequelize from '../config/connections'

const Books = BooksMore(sequelize);
const User = UserMore(sequelize);

User.hasMany(Books, {foreignKey: 'assignedUserId'})
Books.belongsTo(User, {foreignKey:"assignedUserId", as: 'assignedUser'})
export {Books,User  };
