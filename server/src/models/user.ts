import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';
import bcrypt from 'bcrypt';

interface UserData{
    id: number;
    username: string;
    email: string;
    password: string;
}

interface UserCreation extends Optional<UserData, "id">{}

export class User 
extends Model<UserData, UserCreation> implements UserData {

    public id!: number;
    public username!: string;
    public email!: string;
    public password!: string;
  
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    
    public async setPassword(password: string) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(password, saltRounds);
      }
}
    
export function UserMore (sequelize: Sequelize): typeof User{
    User.init(
    {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        tableName: 'users',
        sequelize,
        hooks: {
          beforeCreate: async (user: User) => {
            await user.setPassword(user.password);
          },
          beforeUpdate: async (user: User) => {
            await user.setPassword(user.password);
          },
        },
      }
    );
  
    return User;
}