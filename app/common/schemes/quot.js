/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quot', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    events_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'events',
        key: 'id'
      }
    },
    customers_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
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
    tableName: 'quot'
  });
};
