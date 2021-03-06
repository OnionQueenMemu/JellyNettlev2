'use strict';
const { Validator } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 20]
      }
    },
    photoUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favoriteConsole: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    introduction: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Profile.associate = function(models) {
    Profile.hasOne(models.Privacy, { foreignKey: 'profileId', onDelete: 'CASCADE', hooks: true })
    Profile.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Profile;
};