import { Sequelize } from "sequelize"
const dbUser = process.env.DBUSER || "user"
const dbPass = process.env.DBPASS || "pass"
const dbName = process.env.DBUSERS || "users"
const dbHost = process.env.USERSDBHOST || "localhost"

export const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    dialect: "postgres",
    host: dbHost
})


async function testDbConnection(): Promise<void> {
    try {
        await sequelize.authenticate()
        console.log("connection to database success")
    }
    catch (err) {
        console.log("error connecting to database", err)
    }
}
testDbConnection()

