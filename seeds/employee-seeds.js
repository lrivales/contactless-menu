const { Employee } = require('../models/');

const employeeData = [
  {
    "first_name": "Lawrence",
    "last_name": "Rivales",
    "password": "password"
  },
  {
    "first_name": "Nadine",
    "last_name": "Paez Andrade",
    "password": "password"
  },
  {
    "first_name": "Chad",
    "last_name": "Aldrich",
    "password": "password"
  }
]

const seedEmployees = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployees;