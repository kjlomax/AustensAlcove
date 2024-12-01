import { DataTypes, Sequelize, Model, Optional } from 'sequelize';


interface WantsData {
    id: number;
    favorite: string;

}

interface WantsDataCreation extends Optional<WantsData, 'id'> { }

export class Wants
extends Model<WantsData, WantsDataCreation> implements WantsData {

    public id!: number;
    public favorite!: string;

}

export function WantsMore (sequelize: Sequelize): typeof Wants {
    Wants.init({
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
            tableName: 'Wants',
            sequelize,
        
    })
    return Wants;
}