import React from 'react';

interface EmailTemplateProps {
  referralCode: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ referralCode }) => (
  <div style={{ fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
    <h1 style={{ color: '#6d28d9' }}>Welcome to The Next Big Thing!</h1>
    <p>Thanks for joining our waitlist! We&apos;re thrilled to have you on board.</p>
    
    <div style={{ margin: '24px 0', padding: '20px', background: '#f4f4f5', borderRadius: '8px' }}>
      <p style={{ margin: 0 }}><strong>Your Referral Code:</strong> {referralCode}</p>
    </div>
    
    <h2 style={{ color: '#6d28d9' }}>What&apos;s Next?</h2>
    <ul>
      <li>You&apos;ll be among the first to know when we launch</li>
      <li>Get exclusive early access to our platform</li>
      <li>Receive special founding member benefits</li>
    </ul>
    
    <p>Stay tuned for updates and behind-the-scenes content as we build something extraordinary!</p>
    
    <div style={{ marginTop: '32px', paddingTop: '32px', borderTop: '1px solid #e4e4e7' }}>
      <p style={{ color: '#71717a', fontSize: '14px' }}>
        If you didn&apos;t sign up for this waitlist, you can safely ignore this email.
      </p>
    </div>
  </div>
);

export default EmailTemplate; 