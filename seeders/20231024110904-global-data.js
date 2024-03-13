"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const date = new Date();

		await queryInterface.bulkInsert(
			"learningPaths",
			[
				{ title: "Trainings", createdAt: date, updatedAt: date },
				{ title: "Education", createdAt: date, updatedAt: date }
			],
			{}
		);

		await queryInterface.bulkInsert(
			"classes",
			[
				{ title: "Change Management", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Communication and Presentation Skills", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Compliance and Regulatory", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Conflict Resolution and Negotiation", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Cross-Cultural", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Customer Relationship Management (CRM)", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Cybersecurity", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Diversity and Inclusion", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Emotional Intelligence", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Environmental and Sustainability", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Ethics and Integrity", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Financial Literacy", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Innovation and Creativity", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Leadership and Management", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Onboarding", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Project Management", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Quality Control and Six Sigma", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Remote Work and Virtual Collaboration", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Safety", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Sales and Customer Service", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Soft Skills", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Stress Management and Well-being", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Team Building and Collaboration", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Technical and IT", learningPathId: 1, createdAt: date, updatedAt: date },
				{ title: "Time Management and Productivity", learningPathId: 1, createdAt: date, updatedAt: date }
			],
			{}
		);

		await queryInterface.bulkInsert(
			"courseTaskTypes",
			[
				{ title: "Assessment", createdAt: date, updatedAt: date },
				{ title: "Reading", createdAt: date, updatedAt: date },
				{ title: "Video", createdAt: date, updatedAt: date }
			],
			{}
		);

		await queryInterface.bulkInsert(
			"courseEnrollmentTypes",
			[
				{ title: "All Users", createdAt: date, updatedAt: date },
				{ title: "Department", createdAt: date, updatedAt: date },
				{ title: "Individual", createdAt: date, updatedAt: date },
				{ title: "Teams", createdAt: date, updatedAt: date }
			],
			{}
		);

		await queryInterface.bulkInsert(
			"courseDepartments",
			[
				{ title: "Art and Design", createdAt: date, updatedAt: date },
				{ title: "Business Management", createdAt: date, updatedAt: date },
				{ title: "Engineering", createdAt: date, updatedAt: date },
				{ title: "Health Information Management", createdAt: date, updatedAt: date },
				{ title: "Information Technology", createdAt: date, updatedAt: date },
				{ title: "Journalism", createdAt: date, updatedAt: date },
				{ title: "Sales and Marketing", createdAt: date, updatedAt: date }
			],
			{}
		);

		await queryInterface.bulkInsert(
			"userDepartments",
			[
				{ title: "Accounting", createdAt: date, updatedAt: date },
				{ title: "Administration", createdAt: date, updatedAt: date },
				{ title: "Compliance and Regulatory Affairs", createdAt: date, updatedAt: date },
				{ title: "Customer Service", createdAt: date, updatedAt: date },
				{ title: "Customer Support", createdAt: date, updatedAt: date },
				{ title: "Design and Creative Services", createdAt: date, updatedAt: date },
				{ title: "Engineering", createdAt: date, updatedAt: date },
				{ title: "Finance", createdAt: date, updatedAt: date },
				{ title: "Facilities Management", createdAt: date, updatedAt: date },
				{ title: "Human Resources (HR)", createdAt: date, updatedAt: date },
				{ title: "Information Technology (IT)", createdAt: date, updatedAt: date },
				{ title: "Legal", createdAt: date, updatedAt: date },
				{ title: "Logistics", createdAt: date, updatedAt: date },
				{ title: "Manufacturing", createdAt: date, updatedAt: date },
				{ title: "Marketing", createdAt: date, updatedAt: date },
				{ title: "Operations", createdAt: date, updatedAt: date },
				{ title: "Procurement", createdAt: date, updatedAt: date },
				{ title: "Product Management", createdAt: date, updatedAt: date },
				{ title: "Project Management", createdAt: date, updatedAt: date },
				{ title: "Public Relations (PR)", createdAt: date, updatedAt: date },
				{ title: "Quality Assurance (QA)", createdAt: date, updatedAt: date },
				{ title: "Research and Development (R&D)", createdAt: date, updatedAt: date },
				{ title: "Sales", createdAt: date, updatedAt: date },
				{ title: "Supply Chain", createdAt: date, updatedAt: date }
			],
			{}
		);

		await queryInterface.bulkInsert(
			"userDesignations",
			[
				{ title: "Accountant", createdAt: date, updatedAt: date },
				{ title: "Administrative Assistant", createdAt: date, updatedAt: date },
				{ title: "Architect", createdAt: date, updatedAt: date },
				{ title: "Chemical Engineer", createdAt: date, updatedAt: date },
				{ title: "Civil Engineer", createdAt: date, updatedAt: date },
				{ title: "Compliance and Regulatory Affairs", createdAt: date, updatedAt: date },
				{ title: "Customer Service Representative", createdAt: date, updatedAt: date },
				{ title: "Data Analyst", createdAt: date, updatedAt: date },
				{ title: "Data Scientist", createdAt: date, updatedAt: date },
				{ title: "Dental Hygienist", createdAt: date, updatedAt: date },
				{ title: "Dentist", createdAt: date, updatedAt: date },
				{ title: "Digital Marketing Specialist", createdAt: date, updatedAt: date },
				{ title: "Electrical Engineer", createdAt: date, updatedAt: date },
				{ title: "Executive Assistant", createdAt: date, updatedAt: date },
				{ title: "Financial Advisor", createdAt: date, updatedAt: date },
				{ title: "Financial Analyst", createdAt: date, updatedAt: date },
				{ title: "Graphic Designer", createdAt: date, updatedAt: date },
				{ title: "Human Resources Assistant", createdAt: date, updatedAt: date },
				{ title: "Human Resources Manager", createdAt: date, updatedAt: date },
				{ title: "Legal Assistant", createdAt: date, updatedAt: date },
				{ title: "Marketing Manager", createdAt: date, updatedAt: date },
				{ title: "Mechanical Engineer", createdAt: date, updatedAt: date },
				{ title: "Network Administrator", createdAt: date, updatedAt: date },
				{ title: "Operations Analyst", createdAt: date, updatedAt: date },
				{ title: "Operations Manager", createdAt: date, updatedAt: date },
				{ title: "Pharmacist", createdAt: date, updatedAt: date },
				{ title: "Physical Therapist", createdAt: date, updatedAt: date },
				{ title: "Physician Assistant", createdAt: date, updatedAt: date },
				{ title: "Product Manager", createdAt: date, updatedAt: date },
				{ title: "Project Manager", createdAt: date, updatedAt: date },
				{ title: "Quality Assurance Analyst", createdAt: date, updatedAt: date },
				{ title: "Sales Manager", createdAt: date, updatedAt: date },
				{ title: "Software Engineer", createdAt: date, updatedAt: date },
				{ title: "Systems Administrator", createdAt: date, updatedAt: date },
				{ title: "Teacher", createdAt: date, updatedAt: date },
				{ title: "Web Developer", createdAt: date, updatedAt: date },
				{ title: "UX Designer", createdAt: date, updatedAt: date },
				{ title: "Chemist", createdAt: date, updatedAt: date },
				{ title: "Biomedical Engineer", createdAt: date, updatedAt: date },
				{ title: "Mechanical Designer", createdAt: date, updatedAt: date },
				{ title: "Environmental Scientist", createdAt: date, updatedAt: date },
				{ title: "Business Analyst", createdAt: date, updatedAt: date },
				{ title: "Marketing Specialist", createdAt: date, updatedAt: date },
				{ title: "Product Designer", createdAt: date, updatedAt: date },
				{ title: "Registered Nurse", createdAt: date, updatedAt: date },
				{ title: "Research Scientist", createdAt: date, updatedAt: date }
			],
			{}
		);

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
			"clients",
			[
				{ name: "Oxibit Technologies", website: "https://oxibit.com", createdAt: date, updatedAt: date },
				{ name: "Health at Scale", website: "https://healthatscale.com", createdAt: date, updatedAt: date }
			],
			{}
		);

		await queryInterface.bulkInsert(
			"users",
			[
				{
					firstName: "Admin",
					lastName: "Account",
					email: "admin@lms.com",
					password: "admin123",
					roleId: "1",
					createdAt: date,
					updatedAt: date
				},
				{
					firstName: "Oxibit",
					lastName: "Technologies",
					email: "info@oxibit.com",
					password: "oxibit123",
					roleId: "2",
					clientId: "1",
					createdAt: date,
					updatedAt: date
				},
				{
					firstName: "Health",
					lastName: "at Scale",
					email: "info@healthatscale.com",
					password: "healthatscale123",
					roleId: "2",
					clientId: "2",
					createdAt: date,
					updatedAt: date
				},
				{
					firstName: "Ahmad",
					lastName: "Murtaza",
					email: "ahmad@oxibit.com",
					password: "ahmad123",
					roleId: "3",
					clientId: "1",
					createdAt: date,
					updatedAt: date
				}
			],
			{}
		);

		await queryInterface.bulkInsert("userProfiles", [{ userId: "1", createdAt: date, updatedAt: date }], {});
		await queryInterface.bulkInsert("userProfiles", [{ userId: "2", createdAt: date, updatedAt: date }], {});
		await queryInterface.bulkInsert("userProfiles", [{ userId: "3", createdAt: date, updatedAt: date }], {});
		await queryInterface.bulkInsert("userProfiles", [{ userId: "4", createdAt: date, updatedAt: date }], {});
	},

	async down(queryInterface, Sequelize) {}
};
