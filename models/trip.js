"use strict";

module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define(
		"trip",
		{
			tripName: DataTypes.STRING,
			tripDescription: DataTypes.TEXT,
			startDate: DataTypes.DATEONLY,
			endDate: DataTypes.DATEONLY,
			tripPrice: DataTypes.STRING,
			tripType: DataTypes.STRING,
			cancelationPolicy: DataTypes.TEXT,
			ruleAndRegulation: DataTypes.TEXT,
			isActive: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: "Y"
			}
		},
		{ timestamps: true }
	);
	table.associate = function (models) {
		table.hasMany(models.whishlist);
		table.belongsTo(models.users);
		table.hasMany(models.tripImages);
		table.hasOne(models.tripCategories);
		// table.belongsToMany(models.tripSubCategories, { through: models.tripCategories });
	};
	return table;
};
