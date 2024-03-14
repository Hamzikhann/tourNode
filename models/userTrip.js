"use strict";

module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define(
		"userTrip",
		{
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
		table.belongsTo(models.trip);
	};
	return table;
};
