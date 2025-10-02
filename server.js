import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 8787

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ ok: true })
})

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body || {}

    // Validate inputs
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing fields' })
    }

    // Setup transporter with detailed logging
    const smtpPort = Number(process.env.SMTP_PORT || 587)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpPort === 465, // true for SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // Gmail App Password
      },
      logger: true,  // logs SMTP activity
      debug: true,   // verbose debug info
    })

    // Verify SMTP connection
    try {
      await transporter.verify()
      console.log('[mail] SMTP verified successfully')
    } catch (verifyErr) {
      console.error('[mail] SMTP verification failed:', verifyErr.message)
      return res.status(500).json({
        error: 'Email service not configured correctly',
        details: verifyErr.message,
      })
    }

    // Prepare email
    const fromAddress = process.env.FROM_EMAIL || process.env.SMTP_USER
    const toAddress = process.env.TO_EMAIL || process.env.SMTP_USER
    const mailOptions = {
      from: `Portfolio Contact <${fromAddress}>`,
      to: toAddress,
      subject: `Portfolio inquiry from ${name}`,
      replyTo: email,
      text: message,
      html: `
        <div style="font-family:Arial,sans-serif; line-height:1.5;">
          <h2>New portfolio inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap;">${message.replace(/</g,'&lt;')}</p>
        </div>
      `,
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)
    console.log('[mail] Message sent:', info.messageId, 'response:', info.response)

    res.json({ ok: true, id: info.messageId })
  } catch (err) {
    console.error('[mail] send error:', err && err.message ? err.message : err)
    res.status(500).json({ error: 'Failed to send message', details: err.message || err })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})


