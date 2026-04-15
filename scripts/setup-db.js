// Run once to create all database tables in Supabase.
// Usage: npm run db:setup
//
// Requires in .env.local:
//   SUPABASE_ACCESS_TOKEN — get from https://supabase.com/dashboard/account/tokens
//
// No database connection string needed — uses the Supabase Management API.

const fs = require("fs");
const path = require("path");
const https = require("https");

const PROJECT_REF = "haznwgcywltiasqcpawp";

function loadEnv() {
  const envPath = path.join(__dirname, "..", ".env.local");
  if (!fs.existsSync(envPath)) {
    console.error("❌  .env.local not found");
    process.exit(1);
  }
  const lines = fs.readFileSync(envPath, "utf8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const value = trimmed.slice(eqIdx + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

function httpsPost(url, token, body) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const data = JSON.stringify(body);
    const req = https.request(
      {
        hostname: parsed.hostname,
        path: parsed.pathname,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(data),
        },
      },
      (res) => {
        let raw = "";
        res.on("data", (chunk) => (raw += chunk));
        res.on("end", () => {
          try {
            resolve({ status: res.statusCode, body: JSON.parse(raw) });
          } catch {
            resolve({ status: res.statusCode, body: raw });
          }
        });
      }
    );
    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

const STATEMENTS = [
  // quotes table
  `create table if not exists quotes (
    id          uuid        primary key default gen_random_uuid(),
    created_at  timestamptz not null    default now(),
    name        text        not null,
    email       text        not null,
    phone       text,
    company     text,
    subject     text,
    product     text[],
    message     text
  )`,

  `alter table quotes enable row level security`,

  `do $$ begin
    if not exists (select 1 from pg_policies where tablename='quotes' and policyname='quotes_anon_insert') then
      execute 'create policy quotes_anon_insert on quotes for insert to anon with check (true)';
    end if;
    if not exists (select 1 from pg_policies where tablename='quotes' and policyname='quotes_auth_select') then
      execute 'create policy quotes_auth_select on quotes for select to authenticated using (true)';
    end if;
  end $$`,

  // applications table
  `create table if not exists applications (
    id               uuid        primary key default gen_random_uuid(),
    created_at       timestamptz not null    default now(),
    name             text        not null,
    email            text        not null,
    phone            text,
    position         text,
    message          text,
    resume_file_name text
  )`,

  `alter table applications enable row level security`,

  `do $$ begin
    if not exists (select 1 from pg_policies where tablename='applications' and policyname='applications_anon_insert') then
      execute 'create policy applications_anon_insert on applications for insert to anon with check (true)';
    end if;
    if not exists (select 1 from pg_policies where tablename='applications' and policyname='applications_auth_select') then
      execute 'create policy applications_auth_select on applications for select to authenticated using (true)';
    end if;
  end $$`,
];

async function runQuery(token, query) {
  const url = `https://api.supabase.com/v1/projects/${PROJECT_REF}/database/query`;
  const result = await httpsPost(url, token, { query });

  if (result.status >= 400) {
    const msg =
      typeof result.body === "object"
        ? result.body.message || result.body.error || JSON.stringify(result.body)
        : result.body;
    throw new Error(`HTTP ${result.status}: ${msg}`);
  }
  return result.body;
}

async function main() {
  loadEnv();

  const token = process.env.SUPABASE_ACCESS_TOKEN;
  if (!token || token === "your_access_token_here") {
    console.error(
      "❌  SUPABASE_ACCESS_TOKEN is not set in .env.local.\n\n" +
      "    1. Go to: https://supabase.com/dashboard/account/tokens\n" +
      "    2. Click \"Generate new token\", name it \"kemplast-setup\"\n" +
      "    3. Copy the token and add it to .env.local:\n" +
      "       SUPABASE_ACCESS_TOKEN=sbp_xxxxxxxxxxxx\n"
    );
    process.exit(1);
  }

  console.log("Running migrations via Supabase Management API...\n");

  for (const sql of STATEMENTS) {
    const preview = sql.trim().split("\n")[0].slice(0, 60);
    process.stdout.write(`  → ${preview}... `);
    await runQuery(token, sql);
    console.log("✅");
  }

  console.log("\n🎉  Database is ready!");
  console.log("     • quotes table");
  console.log("     • applications table");
  console.log("     • RLS policies configured\n");
}

main().catch((err) => {
  console.error("\n❌  Migration failed:", err.message);
  process.exit(1);
});
