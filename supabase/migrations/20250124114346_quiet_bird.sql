/*
  # Create waitlist table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
      - `referral_code` (text, unique)
  
  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for inserting new entries
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  referral_code text UNIQUE DEFAULT encode(gen_random_bytes(6), 'hex')
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join waitlist"
  ON waitlist
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Admins can view waitlist"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (auth.role() = 'admin');