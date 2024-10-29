const { Sequelize } = require('sequelize')
const dbUser = process.env.DBUSER
const dbPass = process.env.DBPASS
const dbName = process.env.DBUSERS
const dbHost = process.env.USERSDBHOST

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

