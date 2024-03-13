"use strict";

module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define(
		"userStoriesImages",
		{
			image: DataTypes.STRING,
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
		table.belongsTo(models.userStories);
	};
	return table;
};
