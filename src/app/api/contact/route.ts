import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import emailjs from '@emailjs/nodejs';

function getConfirmationEmailHtml(name: string, message: string, timestamp: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>Transmission Received • Shreyansh Kumar Tiwari</title>
  <style>
    @media only screen and (max-width: 600px) {
      .outer-table { padding: 12px 6px !important; }
      .main-card { width: 100% !important; border-radius: 12px !important; }
      .header-pad { padding: 20px 16px !important; }
      .header-heading { font-size: 20px !important; }
      .body-pad { padding: 20px 16px !important; }
      .badge-pill { font-size: 9px !important; padding: 4px 8px !important; }
      .quote-pad { padding: 12px 14px !important; margin: 16px 0 !important; }
      .quote-text { font-size: 13px !important; }
      .swaddesh-card { padding: 16px 14px !important; margin-top: 20px !important; }
      .swaddesh-title { font-size: 16px !important; }
      .swaddesh-cta { display: block !important; width: 100% !important; text-align: center !important; box-sizing: border-box !important; padding: 12px 16px !important; }
      .social-link { display: block !important; margin-bottom: 8px !important; margin-right: 0 !important; }
      .footer-pad { padding: 16px 12px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #0C0709; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #FAF7F2; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" class="outer-table" style="background-color: #0C0709; padding: 24px 10px; width: 100%; margin: 0 auto;">
    <tr>
      <td align="center">
        <!-- Main Email Container Card -->
        <table role="presentation" width="100%" class="main-card" style="max-width: 580px; width: 100%; background-color: #150D11; border: 1px solid #D4AF37; border-radius: 14px; overflow: hidden; box-shadow: 0 10px 35px rgba(0,0,0,0.85); margin: 0 auto;">
          
          <!-- Top Header Bar -->
          <tr>
            <td class="header-pad" style="background: linear-gradient(135deg, #5A0F1C 0%, #150D11 100%); padding: 24px 22px; border-bottom: 1px solid #2A161E; text-align: left;">
              <table width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span class="badge-pill" style="font-family: monospace; font-size: 10px; letter-spacing: 1.5px; color: #D4AF37; text-transform: uppercase; background-color: rgba(12, 7, 9, 0.85); padding: 4px 10px; border-radius: 20px; border: 1px solid rgba(212, 175, 55, 0.4); display: inline-block; margin-bottom: 10px;">
                      ● TRANSMISSION ACKNOWLEDGED
                    </span>
                    <h1 class="header-heading" style="margin: 0; font-size: 22px; font-weight: 800; color: #FAF7F2; letter-spacing: -0.5px; line-height: 1.25;">
                      Shreyansh Kumar Tiwari
                    </h1>
                    <p style="margin: 4px 0 0 0; font-size: 12px; color: #ECC865; font-style: italic;">
                      Full Stack Vibe Coder &bull; Founder of SwadDesh
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td class="body-pad" style="padding: 24px 22px; text-align: left;">
              <p style="font-size: 15px; line-height: 1.6; color: #FAF7F2; margin: 0 0 12px 0;">
                Namaste <strong style="color: #ECC865;">${name}</strong>,
              </p>
              
              <p style="font-size: 14px; line-height: 1.65; color: #F5E6D3; opacity: 0.95; margin: 0 0 16px 0;">
                Thank you for reaching out! Your note has safely landed in my inbox. I personally review every transmission and will connect back with you <strong>ASAP (typically within 24 hours)</strong>.
              </p>

              <!-- Message Copy Box -->
              <table role="presentation" width="100%" class="quote-pad" style="margin: 18px 0; background-color: #0C0709; border: 1px solid #2A161E; border-left: 3px solid #D4AF37; border-radius: 8px; padding: 14px 16px; box-sizing: border-box;">
                <tr>
                  <td>
                    <span style="font-family: monospace; font-size: 9px; color: #8E7B74; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 6px;">
                      YOUR TRANSMITTED NOTE &bull; ${timestamp}
                    </span>
                    <p class="quote-text" style="margin: 0; font-size: 13px; color: #F5E6D3; line-height: 1.55; font-style: italic; word-break: break-word; overflow-wrap: break-word;">
                      &quot;${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}&quot;
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Flagship Venture Card: SwadDesh -->
              <table role="presentation" width="100%" class="swaddesh-card" style="margin-top: 22px; background: linear-gradient(135deg, rgba(90, 15, 28, 0.45) 0%, rgba(21, 13, 17, 0.95) 100%); border: 1px solid rgba(212, 175, 55, 0.35); border-radius: 10px; padding: 16px 18px; box-sizing: border-box;">
                <tr>
                  <td>
                    <span style="font-family: monospace; font-size: 9px; color: #D4AF37; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 5px;">
                      FLAGSHIP VENTURE &bull; PRE-LAUNCH LIVE
                    </span>
                    <h3 class="swaddesh-title" style="margin: 0 0 5px 0; font-size: 16px; color: #FAF7F2;">
                      SwadDesh • Regional Taste Portal
                    </h3>
                    <p style="margin: 0 0 12px 0; font-size: 12px; color: #F5E6D3; opacity: 0.85; line-height: 1.5;">
                      Desh ka Swaad, Tradition ke Saath. Our Next.js pre-launch portal is live with 100% pure desi ghee regional delicacies!
                    </p>
                    <a href="https://swaddesh.in" target="_blank" class="swaddesh-cta" style="display: inline-block; background-color: #5A0F1C; color: #FAF7F2; text-decoration: none; font-size: 11px; font-weight: bold; font-family: monospace; padding: 9px 18px; border-radius: 20px; border: 1px solid #D4AF37; letter-spacing: 1px;">
                      VISIT SWADDESH.IN &rarr;
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Connect Channels -->
              <div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid #2A161E;">
                <p style="font-family: monospace; font-size: 10px; color: #8E7B74; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 10px 0;">
                  ONLINE CHANNELS:
                </p>
                <p style="margin: 0; font-size: 12px; line-height: 1.8;">
                  <a href="https://linkedin.com/in/shreyansh-kumar-tiwari" target="_blank" class="social-link" style="color: #ECC865; text-decoration: none; margin-right: 14px; font-weight: 600;">LinkedIn &rarr;</a>
                  <a href="https://github.com/shreyaanshtiwari" target="_blank" class="social-link" style="color: #ECC865; text-decoration: none; margin-right: 14px; font-weight: 600;">GitHub &rarr;</a>
                  <a href="https://instagram.com/shreyaansh.tiwari" target="_blank" class="social-link" style="color: #ECC865; text-decoration: none; font-weight: 600;">Instagram (@shreyaansh.tiwari) &rarr;</a>
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="footer-pad" style="background-color: #0C0709; padding: 16px 20px; text-align: center; border-top: 1px solid #2A161E;">
              <p style="margin: 0; font-size: 10px; font-family: monospace; color: #8E7B74; line-height: 1.5;">
                &copy; 2026 Shreyansh Kumar Tiwari &bull; India (IST)
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const recipientEmail = email.trim();
    const senderName = name.trim();

    const timestamp = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date());

    let googleSheetsSuccess = false;
    let autoReplySent = false;
    let notificationSent = false;

    // 1. Send data to Google Sheets (Supports both SheetDB and Google Apps Script Webhooks)
    const sheetsWebhookUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL ||
      '';

    if (sheetsWebhookUrl) {
      try {
        const isSheetDb = sheetsWebhookUrl.includes('sheetdb.io');

        // SheetDB requires matching column header names (Timestamp, Name, Email, Message, Source)
        const sheetPayload = isSheetDb
          ? {
              data: [
                {
                  Timestamp: timestamp,
                  Name: senderName,
                  Email: recipientEmail,
                  Message: message,
                  Source: 'Portfolio Contact Terminal',
                  timestamp: timestamp,
                  name: senderName,
                  email: recipientEmail,
                  message: message,
                  source: 'Portfolio Contact Terminal',
                },
              ],
            }
          : {
              name: senderName,
              email: recipientEmail,
              message,
              timestamp,
              source: 'Portfolio Contact Terminal',
            };

        const sheetsRes = await fetch(sheetsWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(sheetPayload),
          redirect: 'follow',
        });

        if (sheetsRes.ok) {
          googleSheetsSuccess = true;
          console.log('[Contact API] Logged to Google Sheet successfully');
        } else {
          const errText = await sheetsRes.text();
          console.error('[Contact API] Google Sheet response error:', errText);
        }
      } catch (sheetsErr) {
        console.error('[Contact API] Google Sheets Webhook dispatch failed:', sheetsErr);
      }
    }

    // 2. Direct SMTP / Gmail Nodemailer Transport (for luxury automated confirmation email)
    const gmailUser = (process.env.GMAIL_USER || process.env.EMAIL_USER || 'shreyanshtiwari812@gmail.com').replace(/['"]+/g, '').trim();
    const rawPass = process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_APP_PASSWORD || process.env.SMTP_PASSWORD || '';
    const cleanPass = rawPass.replace(/['"]+/g, '').replace(/\s+/g, '').trim();

    if (cleanPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: gmailUser,
            pass: cleanPass,
          },
        });

        // (A) Send personalized luxury dark confirmation email directly to sender's entered email
        const autoReplyInfo = await transporter.sendMail({
          from: `"Shreyansh Kumar Tiwari" <${gmailUser}>`,
          to: recipientEmail,
          replyTo: gmailUser,
          subject: `Transmission Received • Thank you for reaching out, ${senderName}!`,
          html: getConfirmationEmailHtml(senderName, message, timestamp),
        });
        autoReplySent = true;
        console.log(`[Contact API] Auto-reply sent to ${recipientEmail}, messageId: ${autoReplyInfo.messageId}`);

        // (B) Send alert notification to Shreyansh
        const notifInfo = await transporter.sendMail({
          from: `"Portfolio Contact Terminal" <${gmailUser}>`,
          to: gmailUser,
          replyTo: recipientEmail,
          subject: `⚡ New Portfolio Note from ${senderName} (${recipientEmail})`,
          text: `Name: ${senderName}\nEmail: ${recipientEmail}\nTime: ${timestamp}\n\nMessage:\n${message}`,
        });
        notificationSent = true;
        console.log(`[Contact API] Admin notification sent to ${gmailUser}, messageId: ${notifInfo.messageId}`);
      } catch (mailErr) {
        console.error('[Contact API] Nodemailer dispatch error:', mailErr);
      }
    } else {
      console.warn('[Contact API] GMAIL_APP_PASSWORD is not set or empty.');
    }

    // 3. Fallback to EmailJS if Nodemailer notification wasn't sent
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
    const privateKey = process.env.EMAILJS_PRIVATE_KEY || '';

    if (!notificationSent && serviceId && templateId && publicKey) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: senderName,
            from_email: recipientEmail,
            message: message,
            timestamp: timestamp,
            to_name: 'Shreyansh',
          },
          {
            publicKey: publicKey,
            privateKey: privateKey,
          }
        );
        notificationSent = true;
      } catch (emailErr) {
        console.warn('EmailJS dispatch failed or skipped:', emailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your transmission has been processed successfully.',
        savedToSheets: googleSheetsSuccess,
        autoReplySent,
        notificationSent,
        sentTo: recipientEmail,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process transmission: ' + errorMessage },
      { status: 500 }
    );
  }
}
