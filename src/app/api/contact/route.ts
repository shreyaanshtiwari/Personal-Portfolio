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
  <title>Transmission Received • Shreyansh Kumar Tiwari</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0C0709; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #FAF7F2;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0C0709; padding: 40px 15px;">
    <tr>
      <td align="center">
        <!-- Main Email Container Card -->
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #150D11; border: 1px solid #D4AF37; border-radius: 16px; overflow: hidden; box-shadow: 0 12px 40px rgba(0,0,0,0.85);">
          
          <!-- Top Header Bar -->
          <tr>
            <td style="background: linear-gradient(135deg, #5A0F1C 0%, #150D11 100%); padding: 32px 30px; border-bottom: 1px solid #2A161E; text-align: left;">
              <table width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="font-family: monospace; font-size: 11px; letter-spacing: 2px; color: #D4AF37; text-transform: uppercase; background-color: rgba(12, 7, 9, 0.85); padding: 5px 12px; border-radius: 20px; border: 1px solid rgba(212, 175, 55, 0.4); display: inline-block; margin-bottom: 14px;">
                      ● TRANSMISSION RECEIVED &bull; ACKNOWLEDGED
                    </span>
                    <h1 style="margin: 0; font-size: 26px; font-weight: 800; color: #FAF7F2; letter-spacing: -0.5px; line-height: 1.2;">
                      Shreyansh Kumar Tiwari
                    </h1>
                    <p style="margin: 6px 0 0 0; font-size: 13px; color: #ECC865; font-style: italic;">
                      Full Stack Vibe Coder &amp; Founder of SwadDesh
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 36px 30px; text-align: left;">
              <p style="font-size: 17px; line-height: 1.6; color: #FAF7F2; margin-top: 0;">
                Namaste <strong style="color: #ECC865;">${name}</strong>,
              </p>
              
              <p style="font-size: 15px; line-height: 1.7; color: #F5E6D3; opacity: 0.95;">
                Thank you for reaching out! Your note has safely landed in my inbox. I personally review every transmission and will connect back with you <strong>ASAP (typically within 24 hours)</strong>.
              </p>

              <!-- Message Copy Box -->
              <table role="presentation" width="100%" style="margin: 24px 0; background-color: #0C0709; border: 1px solid #2A161E; border-left: 4px solid #D4AF37; border-radius: 8px; padding: 18px;">
                <tr>
                  <td>
                    <span style="font-family: monospace; font-size: 10px; color: #8E7B74; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">
                      YOUR TRANSMITTED NOTE &bull; ${timestamp}
                    </span>
                    <p style="margin: 0; font-size: 14px; color: #F5E6D3; line-height: 1.6; font-style: italic;">
                      &quot;${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}&quot;
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Flagship Venture Card: SwadDesh -->
              <table role="presentation" width="100%" style="margin-top: 28px; background: linear-gradient(135deg, rgba(90, 15, 28, 0.45) 0%, rgba(21, 13, 17, 0.95) 100%); border: 1px solid rgba(212, 175, 55, 0.35); border-radius: 12px; padding: 20px;">
                <tr>
                  <td>
                    <span style="font-family: monospace; font-size: 10px; color: #D4AF37; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 6px;">
                      FLAGSHIP VENTURE &bull; PRE-LAUNCH LIVE
                    </span>
                    <h3 style="margin: 0 0 6px 0; font-size: 18px; color: #FAF7F2;">
                      SwadDesh • Regional Taste Portal
                    </h3>
                    <p style="margin: 0 0 14px 0; font-size: 13px; color: #F5E6D3; opacity: 0.85; line-height: 1.5;">
                      Desh ka Swaad, Tradition ke Saath. Our Next.js pre-launch website is live! Discover 100% pure desi ghee regional delicacies and join early access.
                    </p>
                    <a href="https://swaddesh.in" target="_blank" style="display: inline-block; background-color: #5A0F1C; color: #FAF7F2; text-decoration: none; font-size: 12px; font-weight: bold; font-family: monospace; padding: 10px 22px; border-radius: 25px; border: 1px solid #D4AF37; letter-spacing: 1px;">
                      VISIT SWADDESH.IN &rarr;
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Connect Channels -->
              <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #2A161E;">
                <p style="font-family: monospace; font-size: 11px; color: #8E7B74; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px 0;">
                  ONLINE CHANNELS:
                </p>
                <p style="margin: 0; font-size: 13px; line-height: 1.8;">
                  <a href="https://linkedin.com/in/shreyansh-kumar-tiwari" target="_blank" style="color: #ECC865; text-decoration: none; margin-right: 15px; font-weight: 600;">LinkedIn &rarr;</a>
                  <a href="https://github.com/shreyaanshtiwari" target="_blank" style="color: #ECC865; text-decoration: none; margin-right: 15px; font-weight: 600;">GitHub &rarr;</a>
                  <a href="https://instagram.com/shreyaansh.tiwari" target="_blank" style="color: #ECC865; text-decoration: none; font-weight: 600;">Instagram (@shreyaansh.tiwari) &rarr;</a>
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0C0709; padding: 22px 30px; text-align: center; border-top: 1px solid #2A161E;">
              <p style="margin: 0; font-size: 11px; font-family: monospace; color: #8E7B74;">
                &copy; 2026 Shreyansh Kumar Tiwari &bull; Crafted with intention &bull; India (IST)
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

    const timestamp = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date());

    const payload = {
      name,
      email,
      message,
      timestamp,
      source: 'Personal Portfolio Contact Terminal',
    };

    let googleSheetsSuccess = false;
    let autoReplySent = false;
    let notificationSent = false;

    // 1. Send data to Google Sheets Webhook (Apps Script / SheetDB)
    const sheetsWebhookUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL ||
      '';

    if (sheetsWebhookUrl) {
      try {
        const sheetsRes = await fetch(sheetsWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          redirect: 'follow',
        });
        if (sheetsRes.ok) {
          googleSheetsSuccess = true;
        }
      } catch (sheetsErr) {
        console.error('Google Sheets Webhook dispatch failed:', sheetsErr);
      }
    }

    // 2. Direct SMTP / Gmail Nodemailer Transport (for luxury automated confirmation email)
    const gmailUser = process.env.GMAIL_USER || process.env.EMAIL_USER || 'shreyanshtiwari812@gmail.com';
    const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_APP_PASSWORD || process.env.SMTP_PASSWORD || '';

    if (gmailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: gmailUser,
            pass: gmailPass,
          },
        });

        // (A) Send personalized luxury dark confirmation email to sender
        await transporter.sendMail({
          from: `"Shreyansh Kumar Tiwari" <${gmailUser}>`,
          to: email,
          subject: `Transmission Received • Thank you for reaching out, ${name}!`,
          html: getConfirmationEmailHtml(name, message, timestamp),
        });
        autoReplySent = true;

        // (B) Send alert notification to Shreyansh
        await transporter.sendMail({
          from: `"Portfolio Contact Terminal" <${gmailUser}>`,
          to: gmailUser,
          replyTo: email,
          subject: `⚡ New Portfolio Note from ${name} (${email})`,
          text: `Name: ${name}\nEmail: ${email}\nTime: ${timestamp}\n\nMessage:\n${message}`,
        });
        notificationSent = true;
      } catch (mailErr) {
        console.error('Nodemailer dispatch error:', mailErr);
      }
    }

    // 3. Fallback to EmailJS if configured
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
            from_name: name,
            from_email: email,
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
