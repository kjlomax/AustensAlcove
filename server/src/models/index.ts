import * as dotenv from 'dotenv';
dotenv.config();
import { BooksMore } from './books.js';
import { UserMore } from './user.js'
import { FavoritesMore } from './favorites.js'
import { WantsMore } from './wantToRead.js'
import {MoviesMore} from './movies.js'
import sequelize from '../config/connections.js'

const Books = BooksMore(sequelize);
const User = UserMore(sequelize);
const Favorites = FavoritesMore(sequelize);
const Wants = WantsMore(sequelize);
const Movie = MoviesMore(sequelize)

User.hasMany(Books, { foreignKey: 'assignedUserId' });
User.hasMany(Favorites, { foreignKey: 'favoritesId' });
User.hasMany(Movie,{ foreignKey: 'userId'});

Books.belongsTo(User, { foreignKey: "assignedUserId", as: 'assignedUser' });
Wants.belongsTo(User, { foreignKey: "userId", as: 'user' });
Movie.belongsTo(User,{foreignKey: 'userId', as: 'user'});
export { Books, User, Favorites,Wants,Movie, sequelize };