"use client";

import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailParams {
    to: string;
    subject: string;
    text?: string;
    html?: string;
    replyTo?: string;
    react?: React.ReactElement;
}

export const sendEmail = async ({ 
    to, 
    subject, 
    text, 
    html, 
    replyTo, 
    react 
}: EmailParams) => {
    await resend.emails.send({
        from: 'The Next Big Thing <onboarding@resend.dev>',
        to,
        reply_to: replyTo,
        subject,
        text,
        html,
        react,
    });
};