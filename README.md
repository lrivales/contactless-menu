# Contactless Menu

## Description
This is an app for ordering food in a contactless method.  This is not for online ordering but for dine-in only.

## Concept
- Diners walk in, seat themselves, and view the menu from a device that is on the table similar to how some airlines serve meals on flights.
- The app is displayed on the device.
- The customer selects their table number.
- When the customer clicks next, a list of food categories is displayed.
- When the customer selects a category, it shows a list of menu items for that category.
- When the customer selects a food item and quantity, it gets added to the shopping cart.
- When the customer is done selecting menu items, he/she can click on the shopping cart to review all selected menu items and its quantity.
- When the customer is done reviewing the items, he/she clicks submit order and it gets added to the orders table.
- When an employee logs in to the app, it displays a list of pending orders.
- When the order is complete, the employee closes the order and it gets removed from the orders table.
- The employee brings the meal to the table when ready.
- After the customer leaves, the employee sanitizes the table and the device for the next customer.

## Technologies
- MySQL
- Express
- Sequelize
- Handlebars
- bcrypt
- express-session
- connect-session-sequelize
- dotenv
- nodemon

## Links
- Heroku: https://polar-earth-23819.herokuapp.com/
- Github: https://github.com/lrivales/contactless-menu