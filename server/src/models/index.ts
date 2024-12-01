import * as dotenv from 'dotenv';
dotenv.config();
import { BooksMore } from './books.js';
import { UserMore } from './user.js'
import { FavoritesMore } from './favorites.js'
import { WantsMore } from './wantToRead.js'
import sequelize from '../config/connections.js'

const Books = BooksMore(sequelize);
const User = UserMore(sequelize);
const Favorites = FavoritesMore(sequelize);
const Wants = WantsMore(sequelize);

User.hasMany(Books, { foreignKey: 'assignedUserId' });
User.hasMany(Favorites, { foreignKey: 'favoritesId' });
Books.belongsTo(User, { foreignKey: "assignedUserId", as: 'assignedUser' })
Wants.belongsTo(User, { foreignKey: "userId", as: 'user' })

export { Books, User, Favorites, sequelize };