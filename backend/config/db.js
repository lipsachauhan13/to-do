import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: console.log,
    }
);

async function conn() {
    try{
        await sequelize.authenticate();
        console.log("database connected successfully");
        
        await sequelize.sync();
        console.log("table created successfully");
        
    } catch (err){
        console.error("connection failed", err);
    }
}

conn();
export default sequelize;