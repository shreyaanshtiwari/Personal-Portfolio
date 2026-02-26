import { NextResponse } from 'next/server';
import emailjs from '@emailjs/nodejs';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
        const privateKey = process.env.EMAILJS_PRIVATE_KEY || ''; // Optional but recommended for server

        if (!serviceId || !templateId || !publicKey) {
            console.error("EmailJS credentials missing from environment.");
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
            to_name: "Portfolio Admin", // Or dynamically get portfolio footer name
        };

        const response = await emailjs.send(
            serviceId,
            templateId,
            templateParams,
            {
                publicKey: publicKey,
                privateKey: privateKey, // Optional
            }
        );

        return NextResponse.json(
            { success: true, message: 'Message received successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
