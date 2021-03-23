const env = require('dotenv');
const nodemailer = require('nodemailer');

env.config();

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SEND_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.sendContactFormMessage = (req, res) => {
  const { name, email, message } = req.body;

    const mail = {
    from: email,
    to: process.env.RECIEVE_EMAIL,
    subject: `Message from: ${name} `,
    html: `<p>name: ${name}</p><p>email: ${email}</p><p>message: ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send();
    }
  });
};
