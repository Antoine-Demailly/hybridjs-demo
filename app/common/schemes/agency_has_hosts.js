/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agency_has_hosts', {
    agencyId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'agencies',
        key: 'id'
      }
    },
    hostId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'hosts',
        key: 'id'
      }
    },
    isActive: {
      type: DataTypes.INTEGER(4),
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
    tableName: 'agency_has_hosts'
  });
};
