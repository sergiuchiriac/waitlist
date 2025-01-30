import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Add to waitlist
    const { error: dbError, data } = await supabase
      .from('waitlist')
      .insert([{ email }])
      .select('referral_code')
      .single();

    if (dbError) throw dbError;

    // Send confirmation email
    await resend.emails.send({
      from: 'The Next Big Thing <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to the Waitlist!',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #6d28d9;">Welcome to The Next Big Thing!</h1>
          <p>Thanks for joining our waitlist! We're thrilled to have you on board.</p>
          
          <div style="margin: 24px 0; padding: 20px; background: #f4f4f5; border-radius: 8px;">
            <p style="margin: 0;"><strong>Your Referral Code:</strong> ${data.referral_code}</p>
          </div>
          
          <h2 style="color: #6d28d9;">What's Next?</h2>
          <ul>
            <li>You'll be among the first to know when we launch</li>
            <li>Get exclusive early access to our platform</li>
            <li>Receive special founding member benefits</li>
          </ul>
          
          <p>Stay tuned for updates and behind-the-scenes content as we build something extraordinary!</p>
          
          <div style="margin-top: 32px; padding-top: 32px; border-top: 1px solid #e4e4e7;">
            <p style="color: #71717a; font-size: 14px;">
              If you didn't sign up for this waitlist, you can safely ignore this email.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ 
      message: 'Successfully joined waitlist',
      referralCode: data.referral_code
    });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
}