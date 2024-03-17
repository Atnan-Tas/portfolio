import nodemailer from 'nodemailer';

const sendEmailHandler = async (req, res) => {
  const { email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
  });

  console.log("Email:", process.env.EMAIL_ADDRESS);
console.log("Password:", process.env.EMAIL_PASSWORD);


  const mailOptions = {
    from: email,
    to: 'atnan.tas.pro@gmail.com',
    subject: subject,
    text: message,
    // html: `<p>${message}</p>`, // si vous voulez envoyer du HTML
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    res.status(200).send('E-mail envoyé avec succès!');
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    res.status(500).send("Erreur lors de l'envoi de l'email");
  }

  
};

export default sendEmailHandler;
