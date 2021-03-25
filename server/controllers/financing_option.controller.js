const db = require("../models");
const User = db.user;
const FinancingCategory = db.financingCategory;
const FinancingOption = db.financingOption;
const Product = db.product;
const RecurringCost = db.recurringCost;
const Record = db.record;

const Op = db.Sequelize.Op;

// V2 have it update the users assets and liabilities

exports.createFinancingOption = (req, res) => {};
