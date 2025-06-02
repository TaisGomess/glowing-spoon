const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const ColaboradoresModel = sequelize.define('colaboradores', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
}, {
  tableName: 'colaboradores',
  timestamps: false
});

module.exports = ColaboradoresModel;
