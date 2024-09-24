import { Catedratico } from './catedraticos.model.js';
import { Horario } from './horarios.model.js';
import { Control } from './control.model.js';
import { Log } from './logs.model.js';

// RELACIONES
Catedratico.hasMany(Horario, {
  foreignKey: 'id_catedratico',
  sourceKey: 'id_catedratico',
});

Horario.belongsTo(Catedratico, {
  foreignKey: 'id_catedratico',
  targetKey: 'id_catedratico',
});

Catedratico.hasMany(Control, {
  foreignKey: 'id_catedratico',
  sourceKey: 'id_catedratico',
});

Control.belongsTo(Catedratico, {
  foreignKey: 'id_catedratico',
  targetKey: 'id_catedratico',
});

Catedratico.hasMany(Log, {
  foreignKey: 'id_catedratico',
  sourceKey: 'id_catedratico',
});

Log.belongsTo(Catedratico, {
  foreignKey: 'id_catedratico',
  targetKey: 'id_catedratico',
});

Control.addHook('afterCreate', async (control, options) => {
  const count = await Control.count({
    where: {
      id_catedratico: control.id_catedratico,
      estatus: false
    }
  });

  if (count >= 3) {
    await Log.create({
      id_catedratico: control.id_catedratico,
      motivo: 'Tres inasistencias registradas',
    });
  }
});

export default {
  Catedratico,
  Horario,
  Control,
  Log,
};
