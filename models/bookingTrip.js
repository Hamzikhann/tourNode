"use strict";

module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define(
		"bookingTrip",
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
		table.belongsTo(models.bookings);
		table.belongsTo(models.trip);
	};
	return table;
};
