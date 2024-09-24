import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

//MODELO PARA CONTROL
export const Control = sequelize.define(
  "control",
  {
    id_ingreso: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_catedratico: {
      type: DataTypes.INTEGER,
    },

    fechaHoraIngreso: {
      type: DataTypes.DATE,
    },

    fechaHoraSalida: {
      type: DataTypes.DATE,
    },

    estatus: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: false,
  }
);
