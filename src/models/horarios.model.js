import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

//MODELO HORARIOS
export const Horario = sequelize.define(
  "horario",
  {
    id_horario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_catedratico: {
      type: DataTypes.INTEGER,
    },

    curso: {
      type: DataTypes.STRING,
    },

    hora_inicio: {
      type: DataTypes.TIME,
    },

    hora_fin: {
      type: DataTypes.TIME,
    },
  },
  {
    timestamps: false,
  }
);
