import 'dotenv/config'
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend"

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const senderName = body.name;
  const senderEmail = body.email;
  const object = body.object;
  const message = body.message;
  // const { message } = body

  const mailerSend = new MailerSend({
    apiKey: 'mlsn.36bccd326d31bac7654e59273df1ac18c16cb2dd49875a736fd3547cb610baba'
  })

  const sentFrom = new Sender("postmaster@feelit-app.com", "Feelit Website");

  const recipients = [
    new Recipient("feelit.ada@gmail.com", "Feelit")
  ];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject("Demande de contact")
    .setHtml(message)
    .setText(message);

  await mailerSend.email.send(emailParams);

  return body
})
