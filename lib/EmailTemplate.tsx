import React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Section,
  Text,
} from '@react-email/components';

interface EmailTemplateProps {
  referralCode: string;
}

export const EmailTemplate = ({ referralCode }: EmailTemplateProps) => (
  <Html>
    <Head />
    <Body style={{ fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <Container>
        <Heading style={{ color: '#6d28d9' }}>Welcome to The Next Big Thing!</Heading>
        <Text>Thanks for joining our waitlist! We&apos;re thrilled to have you on board.</Text>
        
        <Section style={{ margin: '24px 0', padding: '20px', background: '#f4f4f5', borderRadius: '8px' }}>
          <Text style={{ margin: 0 }}><strong>Your Referral Code:</strong> {referralCode}</Text>
        </Section>
        
        <Heading as="h2" style={{ color: '#6d28d9' }}>What&apos;s Next?</Heading>
        <ul>
          <li>You&apos;ll be among the first to know when we launch</li>
          <li>Get exclusive early access to our platform</li>
          <li>Receive special founding member benefits</li>
        </ul>
        
        <Text>Stay tuned for updates and behind-the-scenes content as we build something extraordinary!</Text>
        
        <Section style={{ marginTop: '32px', paddingTop: '32px', borderTop: '1px solid #e4e4e7' }}>
          <Text style={{ color: '#71717a', fontSize: '14px' }}>
            If you didn&apos;t sign up for this waitlist, you can safely ignore this email.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
); 