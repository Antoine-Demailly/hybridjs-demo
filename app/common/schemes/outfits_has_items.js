/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('outfits_has_items', {
    outfits_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'outfits',
        key: 'id'
      }
    },
    items_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'items',
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
    tableName: 'outfits_has_items'
  });
};
