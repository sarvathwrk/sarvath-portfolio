const nodemailer = require('nodemailer');

export async function sendMail(data) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sarvathwrk@gmail.com',
        pass: process.env.NEXT_WEBSITE_EMAIL_PASS, // Use environment variable for password
      },
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting Me</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          h2 {
            color: #333;
          }
          p {
            color: #666;
          }
          .message {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #ccc;
          }
          .signature {
            margin-top: 20px;
            text-align: right;
            color: #888;
          }
          .button {
            display: inline-block;
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <p>Dear ${data.name},</p>
          <p>Thank you for reaching out. I'm excited about the opportunity to connect.</p>
          <p>Attached is my CV for your reference:</p>
          <a href="https://drive.google.com/file/d/1oideZPJ9dUgLz2cOz6S_m_3SjlXD46a9/view?usp=sharing" class="button">Download CV</a>
          
          <div class="signature">
            <p>Best Regards,</p>
            <p>Mohamed Sarvath Khan</p>
            <p>Full Stack Developer</p>
          </div>
                </div>
      </body>
      </html>
    `;

    const inquiryHtmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Inquiry</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          h2 {
            color: #333;
          }
          p {
            color: #666;
          }
          .message {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #ccc;
          }
          .signature {
            margin-top: 20px;
            text-align: right;
            color: #888;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone No:</strong> ${data.phone}</p>

          <div class="message">
            <p><strong>Message:</strong>${data.message}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: 'sarvathwrk@gmail.com',
      to: data.email,
      subject: `Thank you for contacting Sarvath!`,
      html: htmlContent,
    };

    const inquiryOptions = {
      from: 'sarvathwrk@gmail.com',
      to: 'sarvathuae@gmail.com',
      subject: `New Contact Inquiry ${new Date()}`,
      html: inquiryHtmlContent,
    };

    // Send both emails concurrently and wait for them to finish
    const [info1, info2] = await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(inquiryOptions),
    ]);

    console.log('Email 1 sent: ' + info1.response);
    console.log('Email 2 sent: ' + info2.response);

    return true; // Indicate success
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}
