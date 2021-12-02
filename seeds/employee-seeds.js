const { Employee } = require('../models/');

const employeeData = [
  {
    "first_name": "Lawrence",
    "last_name": "Rivales",
    "password": "$2b$10$tgktEwuG1xXNO5F6Li7FoubXrM4QCF0HtGjOqa786H82ctuMpOWC2"
  },
  {
    "first_name": "Nadine",
    "last_name": "Paez Andrade",
    "password": "$2b$10$/Yjew22SOO8SmGAudneiceoNqTqoKW7pp1swYVF3uuxT7T8jyLDj2"
  },
  {
    "first_name": "Chad",
    "last_name": "Aldrich",
    "password": "$2b$10$/7lwwFuUVs78YOqXIYG2QuGJXi3Q1utNabHYcxfNqUeBnTlUgmczW"
  }
]

const seedEmployees = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployees;