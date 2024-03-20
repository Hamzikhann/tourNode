"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const date = new Date();

		await queryInterface.bulkInsert(
			"roles",
			[
				{ title: "Administrator", createdAt: date, updatedAt: date },
				{ title: "Client", createdAt: date, updatedAt: date },
				{ title: "User", createdAt: date, updatedAt: date }
			],
			{}
		);

		await queryInterface.bulkInsert(
			"users",
			[
				{
					fullName: "Admin",
					phoneNo: "123456789",
					randomNo: "0000",
					sliderImage: "uploads/sliderImage/admin.png",
					otp: null,
					roleId: 1,
					createdAt: date,
					updatedAt: date
				},
				{
					fullName: "hamza",
					phoneNo: "923184258691",
					randomNo: "1234",
					sliderImage: "uploads/sliderImage/admin.png",
					otp: null,
					roleId: 2,
					createdAt: date,
					updatedAt: date
				},
				{
					fullName: "khan",
					phoneNo: "923464342200",
					randomNo: "2345",
					sliderImage: "uploads/sliderImage/admin.png",
					otp: null,
					roleId: 2,
					createdAt: date,
					updatedAt: date
				},
				{
					fullName: "ali",
					phoneNo: "3456789123",
					randomNo: "3456",
					sliderImage: "uploads/sliderImage/admin.png",
					otp: null,
					roleId: 3,
					createdAt: date,
					updatedAt: date
				},
				{
					fullName: "subhan",
					phoneNo: "567891234",
					randomNo: "4567",
					sliderImage: "uploads/sliderImage/admin.png",
					otp: null,
					roleId: 3,
					createdAt: date,
					updatedAt: date
				}
			],
			{}
		);

		await queryInterface.bulkInsert(
			"trips",
			[
				{
					tripName: "Trip 1",
					tripDescription: "Description for Trip 1",
					startDate: new Date("2024-03-11"),
					endDate: new Date("2024-03-20"),
					tripPrice: "1000",
					tripType: "Group",
					cancelationPolicy: "Cancellation policy for Trip 1",
					ruleAndRegulation: "Rules and regulations for Trip 1",
					createdAt: date,
					updatedAt: date
				},
				{
					tripName: "Trip 2",
					tripDescription: "Description for Trip 2",
					startDate: new Date("2024-03-15"),
					endDate: new Date("2024-03-25"),
					tripPrice: "1500",
					tripType: "Group",
					cancelationPolicy: "Cancellation policy for Trip 2",
					ruleAndRegulation: "Rules and regulations for Trip 2",
					createdAt: date,
					updatedAt: date
				},
				{
					tripName: "Trip 3",
					tripDescription: "Description for Trip 3",
					startDate: new Date("2024-03-20"),
					endDate: new Date("2024-03-30"),
					tripPrice: "1200",
					tripType: "Group",
					cancelationPolicy: "Cancellation policy for Trip 3",
					ruleAndRegulation: "Rules and regulations for Trip 3",
					createdAt: date,
					updatedAt: date
				},
				{
					tripName: "Trip 4",
					tripDescription: "Description for Trip 4",
					startDate: new Date("2024-03-25"),
					endDate: new Date("2024-04-03"),
					tripPrice: "1800",
					tripType: "Group",
					cancelationPolicy: "Cancellation policy for Trip 4",
					ruleAndRegulation: "Rules and regulations for Trip 4",
					createdAt: date,
					updatedAt: date
				},
				{
					tripName: "Trip 5",
					tripDescription: "Description for Trip 5",
					startDate: new Date("2024-03-28"),
					endDate: new Date("2024-04-05"),
					tripPrice: "1300",
					tripType: "Group",
					cancelationPolicy: "Cancellation policy for Trip 5",
					ruleAndRegulation: "Rules and regulations for Trip 5",
					createdAt: date,
					updatedAt: date
				},
				{
					tripName: "Trip 6",
					tripDescription: "Description for Trip 6",
					startDate: new Date("2024-04-02"),
					endDate: new Date("2024-04-10"),
					tripPrice: "2000",
					tripType: "Group",
					cancelationPolicy: "Cancellation policy for Trip 6",
					ruleAndRegulation: "Rules and regulations for Trip 6",
					createdAt: date,
					updatedAt: date
				},
				{
					tripName: "Trip 7",
					tripDescription: "Description for Trip 7",
					startDate: new Date("2024-04-05"),
					endDate: new Date("2024-04-14"),
					tripPrice: "1700",
					tripType: "Offer",
					cancelationPolicy: "Cancellation policy for Trip 7",
					ruleAndRegulation: "Rules and regulations for Trip 7",
					createdAt: date,
					updatedAt: date
				},
				{
					tripName: "Trip 8",
					tripDescription: "Description for Trip 8",
					startDate: new Date("2024-04-10"),
					endDate: new Date("2024-04-19"),
					tripPrice: "1400",
					tripType: "Offer",
					cancelationPolicy: "Cancellation policy for Trip 8",
					ruleAndRegulation: "Rules and regulations for Trip 8",
					createdAt: date,
					updatedAt: date
				},
				{
					tripName: "Trip 9",
					tripDescription: "Description for Trip 9",
					startDate: new Date("2024-04-15"),
					endDate: new Date("2024-04-24"),
					tripPrice: "1600",
					tripType: "Offer",
					cancelationPolicy: "Cancellation policy for Trip 9",
					ruleAndRegulation: "Rules and regulations for Trip 9",
					createdAt: date,
					updatedAt: date
				}
			],
			{}
		);

		await queryInterface.bulkInsert(
			"tripCategories",
			[
				{
					title: "what's Included",
					createdAt: date,
					updatedAt: date
				},
				{
					title: "what to expect",
					createdAt: date,
					updatedAt: date
				},
				{
					title: "Departure and return",
					createdAt: date,
					updatedAt: date
				},
				{
					title: "Additional Information",
					createdAt: date,
					updatedAt: date
				},
				{
					title: "Cancelation Policy",
					createdAt: date,
					updatedAt: date
				},
				{
					title: "Terms And Condition",
					createdAt: date,
					updatedAt: date
				},
				{
					title: "Help",
					createdAt: date,
					updatedAt: date
				}
			],
			{}
		);

		await queryInterface.bulkInsert(
			"tripSubCategories",
			[
				{
					title: "what's Included 1",
					createdAt: date,
					updatedAt: date,
					tripCategoryId: 1
				},
				{
					title: "what to expect 1",
					createdAt: date,
					updatedAt: date,
					tripCategoryId: 2
				},
				{
					title: "Departure and return 1",
					createdAt: date,
					updatedAt: date,
					tripCategoryId: 3
				},
				{
					title: "Additional Information 1",
					createdAt: date,
					updatedAt: date,
					tripCategoryId: 4
				},
				{
					title: "Cancelation Policy 1",
					createdAt: date,
					updatedAt: date,
					tripCategoryId: 5
				},
				{
					title: "Terms And Condition 1",
					createdAt: date,
					updatedAt: date,
					tripCategoryId: 6
				},
				{
					title: "Help 1",
					createdAt: date,
					updatedAt: date,
					tripCategoryId: 7
				}
			],
			{}
		);

		await queryInterface.bulkInsert(
			"tripImages",
			[
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 1 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 1 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 1 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 1 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 1 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 1 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 2 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 2 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 2 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 2 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 2 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 2 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 3 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 3 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 3 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 3 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 3 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 3 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 3 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 4 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 4 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 4 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 4 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 4 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 5 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 5 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 5 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 5 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 6 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 6 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 6 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 6 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 7 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 7 },
				{ imagePath: "uploads/tripImage/editor.png", createdAt: date, updatedAt: date, tripId: 7 },
				{ imagePath: "uploads/tripImage/editor.png", updatedAt: date, createdAt: date, tripId: 7 },
				{ imagePath: "uploads/tripImage/editor.png", updatedAt: date, createdAt: date, tripId: 8 },
				{ imagePath: "uploads/tripImage/editor.png", updatedAt: date, createdAt: date, tripId: 8 },
				{ imagePath: "uploads/tripImage/editor.png", updatedAt: date, createdAt: date, tripId: 8 },
				{ imagePath: "uploads/tripImage/editor.png", updatedAt: date, createdAt: date, tripId: 8 },
				{ imagePath: "uploads/tripImage/editor.png", updatedAt: date, createdAt: date, tripId: 9 },
				{ imagePath: "uploads/tripImage/editor.png", updatedAt: date, createdAt: date, tripId: 9 },
				{ imagePath: "uploads/tripImage/editor.png", updatedAt: date, createdAt: date, tripId: 9 },
				{ imagePath: "uploads/tripImage/editor.png", updatedAt: date, createdAt: date, tripId: 9 }
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {}
};
