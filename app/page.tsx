'use client';

import { useState } from 'react';
import { ArrowRight, Sparkles, Rocket, Shield, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "You're on the list!",
          description: "We've sent you a confirmation email with your referral code.",
        });
        setEmail('');
      } else {
        throw new Error(data.error || 'Failed to join waitlist');
      }
    } catch (error) {
      toast({
        title: 'Something went wrong',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 to-black text-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-4 pt-24 pb-16 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm">Coming Soon</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              The Next Big Thing
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              Join the waitlist for early access to our revolutionary product that will change the way you work.
            </p>
            
            {/* Improved Waitlist Form */}
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-8">
              <div className="relative flex items-center p-1.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-transparent border-0 text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="rounded-full bg-white text-black hover:bg-gray-200 transition-colors px-8"
                >
                  {isLoading ? 'Joining...' : 'Get Notified'}
                </Button>
              </div>
            </form>

            {/* Waitlist Count with Avatars */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex -space-x-3">
                {['JD', 'AS', 'MK'].map((initials, i) => (
                  <div
                    key={initials}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                      i === 0 ? 'bg-purple-500' :
                      i === 1 ? 'bg-blue-500' : 'bg-indigo-500'
                    } border-2 border-black`}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-lg font-medium">
                100+ people on the waitlist
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors backdrop-blur-sm">
            <div className="w-12 h-12 bg-violet-600/20 rounded-lg flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-violet-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Early Access</h3>
            <p className="text-gray-400">
              Be among the first to experience our groundbreaking product and shape its future.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors backdrop-blur-sm">
            <div className="w-12 h-12 bg-violet-600/20 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-violet-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Exclusive Benefits</h3>
            <p className="text-gray-400">
              Get lifetime benefits and special pricing available only to our waitlist members.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors backdrop-blur-sm">
            <div className="w-12 h-12 bg-violet-600/20 rounded-lg flex items-center justify-center mb-4">
              <Bell className="w-6 h-6 text-violet-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Priority Updates</h3>
            <p className="text-gray-400">
              Receive exclusive updates and behind-the-scenes content as we build.
            </p>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-3xl font-bold text-violet-400 mb-2">1,000+</h4>
                <p className="text-gray-400">Waitlist Members</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-violet-400 mb-2">50+</h4>
                <p className="text-gray-400">Industry Partners</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-violet-400 mb-2">12+</h4>
                <p className="text-gray-400">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Don&apos;t Miss Out</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join the waitlist today and be part of something extraordinary from day one.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 rounded-full px-8"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Join the Waitlist
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </main>
  );
}