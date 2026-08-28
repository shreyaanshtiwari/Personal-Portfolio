import { NextResponse } from 'next/server';
import emailjs from '@emailjs/nodejs';

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
    let emailJsSuccess = false;

    // 1. Stream data to Google Sheets Webhook (Google Apps Script)
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
          redirect: 'follow', // Google Apps Script webhooks return 302 redirects
        });
        if (sheetsRes.ok) {
          googleSheetsSuccess = true;
        }
      } catch (sheetsErr) {
        console.error('Google Sheets Webhook dispatch failed:', sheetsErr);
      }
    }

    // 2. Send email via EmailJS if configured
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
    const privateKey = process.env.EMAILJS_PRIVATE_KEY || '';

    if (serviceId && templateId && publicKey) {
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
        emailJsSuccess = true;
      } catch (emailErr) {
        console.warn('EmailJS dispatch failed or skipped:', emailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received and logged successfully.',
        savedToSheets: googleSheetsSuccess,
        emailSent: emailJsSuccess,
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
