/**
 * Email Service - Send Transactional Emails
 * Stub implementation with TODO comments for integrating with real email providers
 * 
 * Supports: Resend, SendGrid, AWS SES, Mailgun, Postmark
 */

const isDev = process.env.NODE_ENV !== 'production'

/**
 * Send purchase confirmation email to customer
 * @param {string} email - Customer email
 * @param {string} tier - Tier key (GENETICS_ONLY, TIER1, TIER2, TIER3)
 * @param {string} tierName - Display name of tier
 * @param {string} sessionId - Stripe session ID
 * @returns {Promise<Object>} - Email send result
 */
export async function sendPurchaseConfirmation(email, tier, tierName, sessionId) {
  try {
    if (isDev) {
      console.log('📧 Sending purchase confirmation email:', {
        to: email,
        tier,
        tierName,
        timestamp: new Date().toISOString()
      })
    }

    // TODO: Implement with your email provider:

    // --- Resend (modern, React-friendly) ---
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // const result = await resend.emails.send({
    //   from: 'noreply@pryima.com',
    //   to: email,
    //   subject: `Welcome to Pryima ${tierName}!`,
    //   html: generatePurchaseConfirmationEmail(email, tierName, sessionId),
    // })
    // return result

    // --- SendGrid ---
    // const sgMail = require('@sendgrid/mail')
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    // const msg = {
    //   to: email,
    //   from: 'noreply@pryima.com',
    //   subject: `Welcome to Pryima ${tierName}!`,
    //   html: generatePurchaseConfirmationEmail(email, tierName, sessionId),
    // }
    // return await sgMail.send(msg)

    // --- AWS SES ---
    // const ses = new AWS.SES()
    // return await ses.sendEmail({
    //   Source: 'noreply@pryima.com',
    //   Destination: { ToAddresses: [email] },
    //   Message: {
    //     Subject: { Data: `Welcome to Pryima ${tierName}!` },
    //     Body: { Html: { Data: generatePurchaseConfirmationEmail(email, tierName, sessionId) } },
    //   },
    // }).promise()

    // --- Mailgun ---
    // const mailgun = require('mailgun.js')
    // const mg = mailgun.client({
    //   username: 'api',
    //   key: process.env.MAILGUN_API_KEY,
    // })
    // return await mg.messages.create('pryima.com', {
    //   from: 'noreply@pryima.com',
    //   to: email,
    //   subject: `Welcome to Pryima ${tierName}!`,
    //   html: generatePurchaseConfirmationEmail(email, tierName, sessionId),
    // })

    // Stub: Return mock result for development
    return {
      success: true,
      messageId: `msg_${Date.now()}`,
      email,
      tier,
      timestamp: new Date().toISOString()
    }
  } catch (err) {
    console.error('❌ Error sending confirmation email:', err.message)
    // Don't throw - log and continue. Email failure shouldn't block webhook
    return { success: false, error: err.message }
  }
}

/**
 * Send onboarding email with next steps
 * @param {string} email
 * @param {string} tier
 * @param {string} tierName
 * @returns {Promise<Object>}
 */
export async function sendOnboardingEmail(email, tier, tierName) {
  try {
    if (isDev) {
      console.log('📧 Sending onboarding email:', {
        to: email,
        tier,
        tierName
      })
    }

    // TODO: Implement with your email provider
    // Similar structure to sendPurchaseConfirmation above

    return {
      success: true,
      messageId: `msg_${Date.now()}`,
      email,
      tier,
      timestamp: new Date().toISOString()
    }
  } catch (err) {
    console.error('❌ Error sending onboarding email:', err.message)
    return { success: false, error: err.message }
  }
}

/**
 * Generate HTML for purchase confirmation email
 * @param {string} email
 * @param {string} tierName
 * @param {string} sessionId
 * @returns {string}
 */
function generatePurchaseConfirmationEmail(email, tierName, sessionId) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #FF4A00, #FF6B00); color: white; padding: 20px; border-radius: 8px; }
          .content { margin: 20px 0; }
          .footer { color: #666; font-size: 12px; border-top: 1px solid #ddd; padding-top: 20px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to Pryima!</h1>
          </div>
          <div class="content">
            <p>Hi ${email},</p>
            <p>Thank you for purchasing <strong>${tierName}</strong>!</p>
            <p>Your payment has been processed successfully. Our team will contact you within 24 hours to confirm your order and discuss onboarding.</p>
            <p><strong>Order Details:</strong></p>
            <ul>
              <li>Package: ${tierName}</li>
              <li>Email: ${email}</li>
              <li>Session ID: ${sessionId}</li>
            </ul>
            <p>If you have any questions, please reply to this email or contact us at <a href="mailto:support@pryima.com">support@pryima.com</a>.</p>
          </div>
          <div class="footer">
            <p>© 2025 Pryima. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `
}

export default {
  sendPurchaseConfirmation,
  sendOnboardingEmail
}
