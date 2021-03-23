const controller = require("../../controllers/blog_controllers/post.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/post/create", controller.createPost);
  
  app.put("/api/post/archive", controller.archivePost);



  
  app.get("/api/posts/all", controller.getAllPosts);
  
  app.get("/api/posts/published", controller.getPublishedPosts);
  
  app.get("/api/posts/:id", controller.getSinglePost);

};
