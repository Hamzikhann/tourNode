"use strict";

module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define(
		"bookingPayment",
		{
			noOfMales: DataTypes.STRING,
			noOfFemales: DataTypes.STRING,
			noOfChildren: DataTypes.STRING,
			paymentMethod: DataTypes.STRING,
			transectionImage: DataTypes.STRING,
			transectionId: DataTypes.STRING,
			pendingPrice: DataTypes.DATEONLY,
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
	};
	return table;
};
