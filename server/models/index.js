
const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// User Models
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);

// Product Models
db.product = require("./product_models/product.model")(sequelize, Sequelize);
db.recurringCost = require("./product_models/recurring_cost.model")(sequelize, Sequelize);
db.productCategory = require("./product_models/category.model")(sequelize, Sequelize);

// Record Model
db.record = require("./record.model")(sequelize, Sequelize);

// Financing Option Models
db.financingCategory = require("./financing_opttion_models/category.model")(sequelize, Sequelize);
db.financingOption = require("./financing_opttion_models/financing_option.model")(sequelize, Sequelize);

// financial models
db.asset = require("./financial_models/asset.model")(sequelize, Sequelize);
db.liability = require("./financial_models/liability.model")(sequelize, Sequelize);

// connects a record to a user
db.record.belongsTo(db.user);
db.user.hasMany(db.record);

// connects a main product and alt product to a the record
db.record.hasOne(db.product)
db.product.belongsTo(db.record, {as: 'main_product'});
db.product.belongsTo(db.record, {as: 'alt_product'});

// connects a record with a financing option
// db.record.hasOne(db.financingOption);

// connects a user to financial info
db.asset.belongsTo(db.user);
db.user.hasOne(db.asset);

db.liability.belongsTo(db.user);
db.user.hasMany(db.liability);

// associates a product to a category
db.product.belongsTo(db.productCategory)
db.productCategory.hasMany(db.product)

// associates a product with recurring costs
db.product.hasMany(db.recurringCost)
db.recurringCost.belongsTo(db.product)

// associates a financing option to a category
db.financingOption.belongsTo(db.financingCategory);
db.financingCategory.hasMany(db.financingOption);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
