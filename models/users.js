"use strict";

module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define(
		"users",
		{
			fullName: DataTypes.STRING,
			phoneNo: DataTypes.STRING,
			otp: DataTypes.STRING,
			randomNo: DataTypes.STRING,
			sliderImage: DataTypes.STRING,
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
		table.hasMany(models.trip);
		table.hasMany(models.userStories);
	};
	return table;
};
