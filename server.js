const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers')

//import handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});


const app = express();
const PORT = process.env.PORT || 3001;

//set up handlebars as the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
}); 