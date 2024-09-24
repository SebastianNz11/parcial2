import { Control } from "../models/control.model.js";

// FUNCIÓN PARA TRAER INFORMACIÓN DE TODOS LOS CONTROLES
export const getControles = async (req, res) => {
  try {
    const controles = await Control.findAll();
    res.json(controles);
  } catch (error) {
    res.status(500).json({ msg: "No fue posible traer los datos de control" });
  }
};

// FUNCIÓN PARA TRAER INFORMACIÓN DE UN CONTROL POR ID
export const getControlById = async (req, res) => {
  const { id } = req.params;
  try {
    const control = await Control.findOne({
      where: { id_ingreso: id },
    });
    if (!control) {
      return res.json({ msg: "No se encontró el control" });
    }
    res.json(control);
  } catch (error) {
    res.status(500).json({ msg: "No se pudo encontrar el control" });
  }
};

// FUNCIÓN PARA INGRESAR INFORMACIÓN DE UN CONTROL
export const postControl = async (req, res) => {
  const { id_catedratico, fechaHoraIngreso, fechaHoraSalida, estatus } = req.body;
  try {
    const control = await Control.create({
      id_catedratico,
      fechaHoraIngreso,
      fechaHoraSalida,
      estatus,
    });
    res.json(control);
  } catch (error) {
    res.status(500).json({ msg: "No se pudo crear el control" });
  }
};

// FUNCIÓN PARA ACTUALIZAR INFORMACIÓN DE UN CONTROL
export const putControl = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_catedratico, fechaHoraIngreso, fechaHoraSalida, estatus } = req.body;

    const control = await Control.findByPk(id);
    if (!control) {
      return res.json({ msg: "No se encontró el control" });
    }
    control.id_catedratico = id_catedratico;
    control.fechaHoraIngreso = fechaHoraIngreso;
    control.fechaHoraSalida = fechaHoraSalida;
    control.estatus = estatus;
    await control.save();
    res.json(control);
  } catch (error) {
    res.status(500).json({ msg: "No se pudo actualizar el control" });
  }
};

// FUNCIÓN PARA ELIMINAR INFORMACIÓN DE UN CONTROL
export const deleteControl = async (req, res) => {
  try {
    const { id } = req.params;
    const control = await Control.destroy({
      where: { id_ingreso: id },
    });
    if (!control) {
      return res.json({ msg: "No se encontró el control" });
    }
    return res.status(204).send();
  } catch (error) {
    res.status(500).json({ msg: "No se pudo eliminar el control" });
  }
};
