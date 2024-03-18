"use strict";

module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define(
		"tripSubCategories",
		{
			title: DataTypes.TEXT,
			isActive: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: "Y"
			}
		},
		{ timestamps: true }
	);
	table.associate = function (models) {
		table.belongsTo(models.tripCategories);
		table.belongsTo(models.trip);
		// table.belongsToMany(models.trip, { through: models.tripCategories });
	};
	return table;
};
