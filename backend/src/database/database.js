import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: "root", //process.env.MYSQL_USER,
    //port: parseInt(process.env.MYSQL_PORT, 10),
    password: "password", //process.env.MYSQL_PASSWORD,
    database: "fitness_app"//process.env.MYSQL_DATABASE
}).promise()

export default pool