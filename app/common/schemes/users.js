/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false
    },
    creationDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gender: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    employeeId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'employees',
        key: 'id'
      }
    },
    statusId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'status',
        key: 'id'
      }
    },
    customerId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    hostId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'hosts',
        key: 'id'
      }
    },
    countryId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'countries',
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
    tableName: 'users'
  });
};
