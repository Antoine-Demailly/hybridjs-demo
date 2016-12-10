/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hosts', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    socialSecurity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    height: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hairColor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ethnicity_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'ethnicity',
        key: 'id'
      }
    },
    hairColor_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'hairColor',
        key: 'id'
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'hosts'
  });
};
