const { Employee } = require('../models/');

const employeeData = [
  {
    "first_name": "Lawrence",
    "last_name": "Rivales"
  },
  {
    "first_name": "Nadine",
    "last_name": "Paez Andrade"
  },
  {
    "first_name": "Chad",
    "last_name": "Aldrich"
  }
]

const seedEmployees = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployees;