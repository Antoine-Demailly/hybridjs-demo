/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agency_has_users', {
    agencyId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'agencies',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    isActive: {
      type: DataTypes.INTEGER(4),
      allowNull: true
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
    tableName: 'agency_has_users'
  });
};
