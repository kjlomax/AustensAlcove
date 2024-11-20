import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface MovieData {
    id: number;
    name: string;
    description: string;
    starring: string[];
    genre: string;
    year: number;
}

interface MovieDataCreation extends Optional<MovieData, 'id'>{}

class Movie extends Model<MovieData, MovieDataCreation> implements MovieData {
    public id!: number;
    public name!: string;
    public description!: string;
    public starring!: string[];
    public genre!: string;
    public year!: number;
}
function CreateMoviesTable(sequelize: Sequelize): typeof Movie {
    Movie.init({
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
        starring: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: 'movies',
        sequelize,
    });

    return Movie;
}

export { CreateMoviesTable, Movie };