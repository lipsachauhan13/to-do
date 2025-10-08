import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

export const Task = sequelize.define('Task',{
    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: true,
    },
    dueDate:{
        type: DataTypes.DATE,
        allowNull: true,
    },
    isCompleted:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
},
{
    tableName: 'Task',
});
