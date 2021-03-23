const controller = require('../controllers/external.controller');

module.exports = function (app) {

  app.post("/api/contact/send", controller.sendContactFormMessage);

};
