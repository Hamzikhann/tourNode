"use strict";

module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define(
		"tripCategories",
		{
			title: DataTypes.STRING,
			isActive: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: "Y"
			}
		},
		{ timestamps: true }
	);
	table.associate = function (models) {
		table.belongsTo(models.trip);
		table.hasMany(models.tripSubCategories);
	};
	return table;
};
