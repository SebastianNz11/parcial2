import { Catedratico } from "../models/catedraticos.model";

// FUNCIÓN PARA TRAER INFORMACIÓN DE TODOS LOS CATEDRÁTICOS
export const getCatedraticos = async (req, res) => {
  try {
    const catedraticos = await Catedratico.findAll();
    res.json(catedraticos);
  } catch (error) {
    res.status(500).json({ msg: "No fue posible traer los datos" });
  }
};

// FUNCIÓN PARA TRAER INFORMACIÓN DE UN CATEDRÁTICO POR ID
export const getCatedraticoById = async (req, res) => {
  const { id } = req.params;
  try {
    const catedratico = await Catedratico.findOne({
      where: { id_catedratico: id },
    });
    if (!catedratico) {
      return res.json({ msg: "No se encontró el catedrático" });
    }
    res.json(catedratico);
  } catch (error) {
    res.status(500).json({ msg: "No se pudo encontrar el catedrático" });
  }
};

// FUNCIÓN PARA INGRESAR INFORMACIÓN DE UN CATEDRÁTICO
export const postCatedratico = async (req, res) => {
  const { nombre, fechaContratacion, fechaNacimiento, genero, ultimoGradoAprobado } = req.body;
  try {
    const catedratico = await Catedratico.create({
      nombre,
      fechaContratacion,
      fechaNacimiento,
      genero,
      ultimoGradoAprobado,
    });
    res.json(catedratico);
  } catch (error) {
    res.status(500).json({ msg: "No se pudo crear el catedrático" });
  }
};

// FUNCIÓN PARA ACTUALIZAR INFORMACIÓN DE UN CATEDRÁTICO
export const putCatedratico = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, fechaContratacion, fechaNacimiento, genero, ultimoGradoAprobado } = req.body;

    const catedratico = await Catedratico.findByPk(id);
    if (!catedratico) {
      return res.json({ msg: "No se encontró el catedrático" });
    }
    catedratico.nombre = nombre;
    catedratico.fechaContratacion = fechaContratacion;
    catedratico.fechaNacimiento = fechaNacimiento;
    catedratico.genero = genero;
    catedratico.ultimoGradoAprobado = ultimoGradoAprobado;
    await catedratico.save();
    res.json(catedratico);
  } catch (error) {
    res.status(500).json({ msg: "No se pudo actualizar el catedrático" });
  }
};

// FUNCIÓN PARA ELIMINAR INFORMACIÓN DE UN CATEDRÁTICO
export const deleteCatedratico = async (req, res) => {
  try {
    const { id } = req.params;
    const catedratico = await Catedratico.destroy({
      where: { id_catedratico: id },
    });
    if (!catedratico) {
      return res.json({ msg: "No se encontró el catedrático" });
    }
    return res.status(204).send();
  } catch (error) {
    res.status(500).json({ msg: "No se pudo eliminar el catedrático" });
  }
};
