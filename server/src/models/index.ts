import * as dotenv from 'dotenv';
dotenv.config();
import { BooksMore } from './books.js';
import { UserMore } from './user.js'
import sequelize from '../config/connections.js'

const Books = BooksMore(sequelize);
const User = UserMore(sequelize);

User.hasMany(Books, { foreignKey: 'assignedUserId' })
Books.belongsTo(User, { foreignKey: "assignedUserId", as: 'assignedUser' })
export { Books, User, sequelize };
