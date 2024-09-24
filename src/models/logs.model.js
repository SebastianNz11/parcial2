import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";


// MODELO LOG PARA REGISTRAR LAS MORAS
export const Log = sequelize.define(
    "log",
    {
      id_log: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_catedratico: {
        type: DataTypes.INTEGER,
      },
      motivo: {
        type: DataTypes.STRING,
      },
      fechaRegistro: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,
    }
  );
  