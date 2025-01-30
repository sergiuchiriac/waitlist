# The Next Big Thing - Waitlist Landing Page

A modern, responsive waitlist landing page built with Next.js 13+, featuring a sleek design, email collection, and automated notifications.

![Landing Page Preview](https://vercel-templates.s3.us-east-1.amazonaws.com/main-images/waiting_list_landing.png?auto=format&fit=crop&q=80&w=2426&h=600)

## 🚀 Features

- ✨ Modern, responsive UI with glassmorphism effects
- 📝 Email collection with database storage
- ✉️ Automated email notifications via Resend
- 🔗 Unique referral code generation
- 🎨 Dark mode optimized design
- 🌐 SEO optimized
- 🔒 Secure data handling with Row Level Security

## 🛠️ Tech Stack

- **Framework**: [Next.js 13+](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Database**: [Supabase](https://supabase.com/)
- **Email Service**: [Resend](https://resend.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Type Safety**: TypeScript
- **Form Handling**: React Hook Form
- **Toast Notifications**: Sonner

## 📦 Project Structure

```
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts    # Waitlist API endpoint
│   ├── page.tsx            # Landing page
│   └── layout.tsx          # Root layout
├── components/
│   └── ui/                 # shadcn/ui components
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   └── grid.svg            # Background pattern
└── supabase/
    └── migrations/         # Database migrations
```

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone <repository-url>
cd <project-name>
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment Variables**

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_anon_key
RESEND_API_KEY=your_resend_api_key
```

4. **Run the development server**

```bash
npm run dev
```

5. **Build for production**

```bash
npm run build
```

## 🗄️ Database Schema

The project uses Supabase with the following schema:

```sql
-- Waitlist table
CREATE TABLE waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  referral_code text UNIQUE DEFAULT encode(gen_random_bytes(6), 'hex')
);

-- Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Anyone can join waitlist"
  ON waitlist FOR INSERT TO public
  WITH CHECK (true);

CREATE POLICY "Admins can view waitlist"
  ON waitlist FOR SELECT TO authenticated
  USING (auth.role() = 'admin');
```

## 📧 Email Integration

The project uses Resend for sending automated emails. Each signup triggers a welcome email with:
- Confirmation of waitlist registration
- Unique referral code
- Next steps and expectations
- Branded HTML template

## 🎨 UI Components

Built with shadcn/ui, featuring:
- Custom form inputs
- Toast notifications
- Buttons with loading states
- Responsive layout components
- Glassmorphism effects
- Avatar stacks
- Progress indicators

## 🔒 Security

- Database access controlled via Row Level Security
- Environment variables for sensitive data
- API route protection
- Email validation
- Rate limiting (recommended to add)

## 📱 Responsive Design

- Mobile-first approach
- Breakpoint optimization
- Fluid typography
- Flexible grid layouts
- Touch-friendly interactions

## 🚀 Deployment

The project is optimized for deployment on platforms like Vercel or Netlify:

1. Connect your repository
2. Set environment variables
3. Deploy!

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.