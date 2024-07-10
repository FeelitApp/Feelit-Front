import 'dotenv/config'
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend"

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const senderName = body.name;
  const senderEmail = body.email;
  const object = body.object;
  const message = body.message

  const mailerSend = new MailerSend({
    apiKey: 'mlsn.36bccd326d31bac7654e59273df1ac18c16cb2dd49875a736fd3547cb610baba'
  })

  const sentFrom = new Sender("postmaster@feelit-app.com", "Feelit Website");

  const recipients = [
    new Recipient("feelit.ada@gmail.com", "Feelit")
  ];

  const formattedHtmlMessage = `
    <p><strong>Nom:</strong> ${senderName}</p>
    <p><strong>Email:</strong> ${senderEmail}</p>
    <p><strong>Objet:</strong> ${object}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  const formattedTextMessage = `
    Nom: ${senderName}
    Email: ${senderEmail}
    Objet: ${object}
    Message:
    ${message}
  `;

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject("Demande de contact")
    .setHtml(formattedHtmlMessage)
    .setText(formattedTextMessage);

  await mailerSend.email.send(emailParams);

  return new Response(null, { status: 302, headers: { Location: "/contact" } });
})
