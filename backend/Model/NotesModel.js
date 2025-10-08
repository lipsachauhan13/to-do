import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

export const Notes = sequelize.define('Notes',{
    title:{
        type: DataTypes.STRING,
        allowNull: false,
         required: true,
    },
    content:{
        type: DataTypes.STRING,
        allowNull: false,
    },
})