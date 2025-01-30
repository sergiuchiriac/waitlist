import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendEmail } from '@/lib/resend';
import { EmailTemplate } from '@/lib/EmailTemplate';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

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

    await sendEmail({
      to: email || '',
      subject: 'Welcome to the Waitlist!',
      text: 'Welcome to the Waitlist!',
      react: EmailTemplate({ referralCode: data.referral_code }),
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