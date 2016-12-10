/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('role', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    category_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'category',
        key: 'id'
      }
    },
    hostess_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'hosts',
        key: 'id'
      }
    },
    steed_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    customer_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'customers',
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
    tableName: 'role'
  });
};
