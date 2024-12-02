//todo Set up movies data table

import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

 
interface MovieData{
    
        
    id: number;
    title: string;
    plot: string;
    director: string;
    genre: string;
    year:string;
    poster: string;
    userId:number;
}

interface MovieDataCreation extends Optional<MovieData, 'id'>{}

export class Movies extends Model<MovieData, MovieDataCreation> implements MovieData{
    
    public id!: number;
    public title!: string;
    public plot!: string;
    public director!: string;
    public genre!: string;
    public year!:string;
    public poster!: string;
    public userId!:number;

}

export function MoviesMore (sequelize: Sequelize): typeof Movies{

    Movies.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        plot: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        director: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year:{
            type:DataTypes.STRING,
            allowNull: false
        },
        poster:{
            type:DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
    },
            {
                tableName: 'movies',
                sequelize,
                
              }
            );
          
            return Movies;
        }