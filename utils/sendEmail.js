const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.rahulkumarbhuiyan3838@gmail.com,
    port: process.env.vkuHr9pa5rHrYEtc,
    auth: {
      user: process.env.xyz@test.com,
      pass: process.env.12go
    }
  });

  await transporter.sendMail({
    from: 'Medi-Serve <no-reply@mediserve.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
  });
};

module.exports = sendEmail;