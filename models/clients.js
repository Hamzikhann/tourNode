"use strict";

module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define(
		"clients",
		{
			fullName: DataTypes.STRING,
			phoneNo: DataTypes.STRING,
			otp: DataTypes.STRING,
			randomNo: DataTypes.STRING,
			isActive: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: "Y"
			}
		},
		{ timestamps: true }
	);
	table.associate = function (models) {
		// table.hasMany(models.users);
		// table.hasMany(models.clientStories);
	};
	return table;
};
