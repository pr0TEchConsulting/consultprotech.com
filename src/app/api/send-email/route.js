import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, countryCode, mobileNo, email, textMessage } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });
  const mailOptions = {
    from: email,
    to: 'contactus@consultprotech.com',
    subject: 'Contact Form Submission',
    text: `
      Name: ${name}
      Country Code: ${countryCode}
      Phone Number: ${mobileNo}
      Email: ${email}
      Message: ${textMessage}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}