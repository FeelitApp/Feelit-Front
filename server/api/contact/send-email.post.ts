import 'dotenv/config'
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const message = body.message
  // const { message } = body

  const mailerSend = new MailerSend({
    apiKey: 'mlsn.36bccd326d31bac7654e59273df1ac18c16cb2dd49875a736fd3547cb610baba'
  })

  const sentFrom = new Sender("you@yourdomain.com", "Your name");

  const recipients = [
    new Recipient("your@client.com", "Your Client")
  ];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject("This is a Subject")
    .setHtml("<strong>This is the HTML content</strong>")
    .setText("This is the text content");

  await mailerSend.email.send(emailParams);


  return body
})
