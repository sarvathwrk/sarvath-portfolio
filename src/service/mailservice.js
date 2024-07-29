var nodemailer = require('nodemailer');
//-----------------------------------------------------------------------------
export async function sendMail(data) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sarvathwrk@gmail.com',
      pass: 'akaj jjnj fjam zgtu',
    },
  });

  var mailOptions = {
    from: 'sarvathwrk@gmail.com',
    to: 'sarvathuae@gmail.com',
    subject: `New Message from ${data.phone} (${data.email})`,
    text: data.message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error);
    } else {
      console.log('Email Sent');
      return true;
    }
  });
}
