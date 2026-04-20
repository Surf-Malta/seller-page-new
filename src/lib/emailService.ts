import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const REGISTRATION_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_REGISTRATION_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

export interface EmailParams {
    firstName: string;
    lastName: string;
    businessName: string;
    email: string;
    whatsapp: string;
    country: string;
    categories: string;
    timestamp: string;
    [key: string]: string;
}

export const EmailService = {
    sendRegistrationEmail: async (params: EmailParams) => {
        if (!SERVICE_ID || !REGISTRATION_TEMPLATE_ID || !PUBLIC_KEY) {
            console.error('EmailJS configuration missing', { SERVICE_ID, REGISTRATION_TEMPLATE_ID, PUBLIC_KEY });
            return { success: false, error: 'Email configuration error' };
        }

        try {
            const response = await emailjs.send(
                SERVICE_ID,
                REGISTRATION_TEMPLATE_ID,
                params,
                PUBLIC_KEY
            );

            console.log('Email sent successfully:', response.status, response.text);
            return { success: true };
        } catch (error: any) {
            console.error('Failed to send email:', error);
            return { success: false, error: error?.text || 'Failed to send email' };
        }
    }
};
