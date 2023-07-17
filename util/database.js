const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs','root','Rajat@7208',{
    dialect : 'mysql',
    host:'localhost'
});

module.exports = sequelize;