import { Horario } from "../models/horarios.model.js";

// FUNCIÓN PARA TRAER INFORMACIÓN DE TODOS LOS HORARIOS
export const getHorarios = async (req, res) => {
  try {
    const horarios = await Horario.findAll();
    res.json(horarios);
  } catch (error) {
    res.status(500).json({ msg: "No fue posible traer los datos de horarios" });
  }
};

// FUNCIÓN PARA TRAER INFORMACIÓN DE UN HORARIO POR ID
export const getHorarioById = async (req, res) => {
  const { id } = req.params;
  try {
    const horario = await Horario.findOne({
      where: { id_horario: id },
    });
    if (!horario) {
      return res.json({ msg: "No se encontró el horario" });
    }
    res.json(horario);
  } catch (error) {
    res.status(500).json({ msg: "No se pudo encontrar el horario" });
  }
};

// FUNCIÓN PARA INGRESAR INFORMACIÓN DE UN HORARIO
export const postHorario = async (req, res) => {
  const { id_catedratico, curso, hora_inicio, hora_fin } = req.body;
  try {
    const horario = await Horario.create({
      id_catedratico,
      curso,
      hora_inicio,
      hora_fin,
    });
    res.json(horario);
  } catch (error) {
    res.status(500).json({ msg: "No se pudo crear el horario" });
  }
};

// FUNCIÓN PARA ACTUALIZAR INFORMACIÓN DE UN HORARIO
export const putHorario = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_catedratico, curso, hora_inicio, hora_fin } = req.body;

    const horario = await Horario.findByPk(id);
    if (!horario) {
      return res.json({ msg: "No se encontró el horario" });
    }
    horario.id_catedratico = id_catedratico;
    horario.curso = curso;
    horario.hora_inicio = hora_inicio;
    horario.hora_fin = hora_fin;
    await horario.save();
    res.json(horario);
  } catch (error) {
    res.status(500).json({ msg: "No se pudo actualizar el horario" });
  }
};

// FUNCIÓN PARA ELIMINAR INFORMACIÓN DE UN HORARIO
export const deleteHorario = async (req, res) => {
  try {
    const { id } = req.params;
    const horario = await Horario.destroy({
      where: { id_horario: id },
    });
    if (!horario) {
      return res.json({ msg: "No se encontró el horario" });
    }
    return res.status(204).send();
  } catch (error) {
    res.status(500).json({ msg: "No se pudo eliminar el horario" });
  }
};
