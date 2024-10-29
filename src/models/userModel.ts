import { DataTypes, Model } from "sequelize";
import { sequelize } from "../utils/database";

class User extends Model { }

User.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},
    {
        sequelize,
        modelName: "User"
    })

async function syncTable(): Promise<void> {
    await User.sync({ alter: true })
}
syncTable()

export default User
