/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('events', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    dateStart: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dateEnd: {
      type: DataTypes.DATE,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customerId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    agencyId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'agencies',
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
    tableName: 'events'
  });
};
