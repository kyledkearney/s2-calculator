const db = require("../../models");
const Post = db.post;
const User = db.user;

const Op = db.Sequelize.Op;

exports.createPost = (req, res) => {
  const { userId, title, content, slug, summary, publishDate } = req.body;

  Post.create({
    title,
    content,
    slug,
    summary,
    publishDate,
  }).then(post => {
    User.findByPk(userId).then(user => {
      post.setUser(user).then(() => {
        res.send({ messsage: "Post Successfully created."})
      });
    });
  }).catch(err => {
    res.status(500).send({message: err.message})
  })
};

exports.editPost = (req, res) => {};

exports.deletePost = (req, res) => {};

exports.archivePost = (req, res) => {
  const { id } = req

  Post.findByPk(id)
    .on('success', post => {
      if (post) {
        post.update({
          isArchived: !post.isArchived,
        }).then(() => {
          res.status(200).send({message: "Post Successfully archived."})
        }).catch(err => {
          res.status(500).send({message: err.message});
        })
      }

      if (!post) {
        res.status(500).send({message: "No post with that idea found."});
      }
    })
}


exports.getPublishedPosts = (req, res) => {
  Post.findAll({
    where: {
      publishDate: {
        [Op.lt]: new Date(),
      },
      isArchived: {
        [Op.not]: true,
      },
    },
  }).then(posts => {
    if (posts.length === 0) {
      return res.status(204).send();
    }

    return res.status(200).send(posts);

  })
};

exports.getSinglePost = (req, res) => {
  const { id } = req.params;
  Post.findByPk(id).then(post => {
    if (!post) {
      return res.status(204).send();
    }

    return res.status(200).send(post);
  })
}

exports.getAllPosts = (req, res) => {
  Post.findAll().then(posts => {
    if (posts.length === 0) {
      return res.status(204).send();
    }
    return res.status(200).send(posts);
  })
};
