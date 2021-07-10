const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'msitkowski94@gmail.com', // Change to your recipient
  from: 'hello@wieslaw-trans.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

function handler(event) {
  console.log(event);

  return sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');

      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      };
    })
    .catch(error => {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: error.message, error }),
      };
    });
}

module.exports = { handler };
