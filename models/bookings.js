"use strict";

module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define(
		"bookings",
		{
			status: DataTypes.STRING,
			date: DataTypes.DATEONLY,
			isActive: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: "Y"
			}
		},
		{ timestamps: true }
	);
	table.associate = function (models) {
		table.belongsTo(models.users);
		table.hasMany(models.bookingPayment);
		table.hasMany(models.bookingTrip);
	};
	return table;
};
