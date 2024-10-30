import { DataTypes, Model } from "sequelize";
import { sequelize } from "../utils/database";
import { UserType } from "../utils/types";

class User extends Model<UserType> {
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public password!: string;
  public admin!: boolean;
}

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
