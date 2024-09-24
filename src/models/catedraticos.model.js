import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

//MODELO PARA CATEDRATICO
export const Catedratico = sequelize.define(
  "catedratico",
  {
    id_catedratico: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },

    fechaContratacion: {
      type: DataTypes.DATE,
    },
    fechaNacimiento: {
      type: DataTypes.DATE,
    },

    genero: {
      type: DataTypes.STRING,
    },

    ultimoGradoAprobado: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
