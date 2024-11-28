import { DataTypes, Sequelize, Model, Optional } from 'sequelize';


interface FavoritesData {
    id: number;
    favorite: string;

}

interface FavoritesDataCreation extends Optional<FavoritesData, 'id'> { }

export class Favorites
extends Model<FavoritesData, FavoritesDataCreation> implements FavoritesData {

    public id!: number;
    public favorite!: string;

}

export function FavoritesMore (sequelize: Sequelize): typeof Favorites {
    Favorites.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        favorite: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
        {
            tableName: 'favorites',
            sequelize,
        
    })
    return Favorites;
}