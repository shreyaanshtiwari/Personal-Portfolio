'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Section } from './Section';
import { Button } from './Button';
import { portfolioData } from '@/data/content';

export const ContactSection = () => {
    const { email } = portfolioData.contact;
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            // Configuration for EmailJS
            // You will need to replace these with your actual EmailJS IDs from emailjs.com
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_name: portfolioData.footer.name,
            };

            const response = await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );

            if (response.status === 200) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <Section id="contact" title="Get In Touch" className="bg-slate-950">
            <div className="grid md:grid-cols-2 gap-12 w-full max-w-5xl">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Let's Talk</h3>
                    <p className="text-slate-400 leading-relaxed mb-8">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <div className="flex items-center gap-4 text-slate-300">
                        <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-blue-500">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 font-medium">Email</p>
                            <a href={`mailto:${email}`} className="text-lg hover:text-blue-400 transition-colors font-semibold">
                                {email}
                            </a>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                        <textarea
                            id="message"
                            required
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                            placeholder="Your message here..."
                        />
                    </div>
                    <Button type="submit" disabled={status === 'submitting'} className="w-full">
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </Button>

                    {status === 'success' && (
                        <p className="text-emerald-500 text-sm font-medium mt-4 text-center">Message sent successfully!</p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-500 text-sm font-medium mt-4 text-center">Something went wrong. Please try again.</p>
                    )}
                </form>
            </div>
        </Section>
    );
};
