/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invites', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    creationDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    invitationCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    agencyId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'agencies',
        key: 'id'
      }
    },
    typesId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'types',
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
    tableName: 'invites'
  });
};
