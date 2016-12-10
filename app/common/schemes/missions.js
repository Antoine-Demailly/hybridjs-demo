/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('missions', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    eventId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'events',
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
    isManager: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    outfitsId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'outfits',
        key: 'id'
      }
    },
    outfitIsReturned: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    laundryCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    meal: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
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
    tableName: 'missions'
  });
};
