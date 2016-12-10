/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('schedule_has_missions', {
    scheduleId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'schedule',
        key: 'id'
      }
    },
    missionsId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'missions',
        key: 'id'
      }
    },
    week: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    year: {
      type: 'YEAR(4)',
      allowNull: false
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
    tableName: 'schedule_has_missions'
  });
};
