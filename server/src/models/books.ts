import { DataTypes, Sequelize, Model, Optional } from 'sequelize';


interface BooksData {
  id: number;
  name: string;
  description: string;
  author: string;
  genre: string;
  assignedUserId: number;

}

interface BookDataCreation extends Optional<BooksData, 'id'> { }

export class Book extends Model<BooksData, BookDataCreation> implements BooksData {

  public id!: number;
  public name!: string;
  public description!: string;
  public author!: string;
  public genre!: string;
  public assignedUserId!: number;

}

export function BooksMore(sequelize: Sequelize): typeof Book {

  Book.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    assignedUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
    {
      tableName: 'books',
      sequelize,

    }
  );

  return Book;
}