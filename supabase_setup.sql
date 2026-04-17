-- Kemplast Supabase Database Setup
-- Run this in your Supabase SQL Editor (Dashboard → SQL Editor → New Query)
-- This creates all necessary tables for the website forms.

-- ═══════════════════════════════════════════════════════════════════
-- 1. QUOTES TABLE (enquiry / quote request form on /contact page)
-- ═══════════════════════════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS quotes (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at  timestamptz NOT NULL    DEFAULT now(),
  name        text        NOT NULL,
  email       text        NOT NULL,
  phone       text,
  company     text,
  subject     text,
  product     text[],
  message     text
);

ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (website visitors)
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='quotes' AND policyname='quotes_anon_insert') THEN
    EXECUTE 'CREATE POLICY quotes_anon_insert ON quotes FOR INSERT TO anon WITH CHECK (true)';
  END IF;
END $$;

-- Allow authenticated users to read (admin dashboard)
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='quotes' AND policyname='quotes_auth_select') THEN
    EXECUTE 'CREATE POLICY quotes_auth_select ON quotes FOR SELECT TO authenticated USING (true)';
  END IF;
END $$;

-- ═══════════════════════════════════════════════════════════════════
-- 2. APPLICATIONS TABLE (job application form on /join-team page)
-- ═══════════════════════════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS applications (
  id               uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at       timestamptz NOT NULL    DEFAULT now(),
  name             text        NOT NULL,
  email            text        NOT NULL,
  phone            text,
  position         text,
  message          text,
  resume_file_name text
);

ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (website visitors)
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='applications' AND policyname='applications_anon_insert') THEN
    EXECUTE 'CREATE POLICY applications_anon_insert ON applications FOR INSERT TO anon WITH CHECK (true)';
  END IF;
END $$;

-- Allow authenticated users to read (admin dashboard)
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='applications' AND policyname='applications_auth_select') THEN
    EXECUTE 'CREATE POLICY applications_auth_select ON applications FOR SELECT TO authenticated USING (true)';
  END IF;
END $$;

-- ═══════════════════════════════════════════════════════════════════
-- 3. FIX: Add missing columns if tables already exist
--    (Safe to run multiple times — uses IF NOT EXISTS)
-- ═══════════════════════════════════════════════════════════════════
DO $$ BEGIN
  -- Add 'company' column to quotes if missing
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'quotes' AND column_name = 'company'
  ) THEN
    ALTER TABLE quotes ADD COLUMN company text;
  END IF;

  -- Add 'phone' column to quotes if missing
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'quotes' AND column_name = 'phone'
  ) THEN
    ALTER TABLE quotes ADD COLUMN phone text;
  END IF;

  -- Add 'product' column to quotes if missing
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'quotes' AND column_name = 'product'
  ) THEN
    ALTER TABLE quotes ADD COLUMN product text[];
  END IF;
END $$;
