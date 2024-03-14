"use strict";

module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define(
		"users",
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
		table.belongsTo(models.roles);
		table.hasMany(models.bookings);
		table.hasMany(models.userTrip);
		table.hasMany(models.userStories);
	};
	return table;
};
