import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

// ─── Configuration ────────────────────────────────────────────────────────────
// Set IS_DOMAIN_VERIFIED to true once kemplast.in is verified in Resend.
// Go to https://resend.com/domains → Add kemplast.in → Add the DNS records → Verify
const IS_DOMAIN_VERIFIED = true;

const FROM_EMAIL = IS_DOMAIN_VERIFIED
  ? "Kemplast Website <noreply@kemplast.in>"
  : "Kemplast Website <onboarding@resend.dev>";

const TO_EMAILS = IS_DOMAIN_VERIFIED
  ? ["sales@kemplast.in", "gpejavar@gmail.com", "chaitanya@kemplast.in"]
  : ["gpejavar@gmail.com"]; // onboarding@resend.dev can only send to account owner
// ──────────────────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Email service is not configured (missing RESEND_API_KEY).");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await req.json();
    const { name, email, phone, company, product, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required." },
        { status: 400 },
      );
    }

    // Try to save to database (best-effort — never block email sending)
    try {
      const { getSupabaseAdmin } = await import("@/lib/supabase-admin");
      const supabaseAdmin = getSupabaseAdmin();
      const { error: dbError } = await supabaseAdmin
        .from("quotes")
        .insert([{ name, email, phone: phone ?? null, company: company ?? null, product, subject, message }]);
      if (dbError) console.error("DB insert failed (non-blocking):", dbError.message);
    } catch (dbErr) {
      // Log but don't throw — DB is secondary to email delivery
      console.error("Supabase unavailable (non-blocking):", dbErr instanceof Error ? dbErr.message : dbErr);
    }

    // Send the email — this is the primary action
    const { error: sendError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAILS,
      replyTo: email,
      subject: `New Enquiry / Quote Request: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #f97316, #ea580c); padding: 24px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0;">📩 New Enquiry / Quote Request</h2>
          </div>
          <div style="border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 140px;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #f97316;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #f97316;">${phone}</a></td>
              </tr>` : ""}
              ${company ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Company:</td>
                <td style="padding: 8px 0; color: #1f2937;">${company}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Subject:</td>
                <td style="padding: 8px 0; color: #1f2937;">${subject}</td>
              </tr>
              ${product && product.length ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Products:</td>
                <td style="padding: 8px 0; color: #1f2937;">${product.join(", ")}</td>
              </tr>` : ""}
            </table>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <p style="font-weight: bold; color: #374151; margin-bottom: 8px;">Message:</p>
            <p style="color: #1f2937; white-space: pre-wrap; background: #f9fafb; padding: 12px; border-radius: 8px;">${message}</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <p style="font-size: 12px; color: #9ca3af;">This enquiry was submitted from the Kemplast website.</p>
          </div>
        </div>
      `,
    });

    if (sendError) {
      console.error("Resend error:", sendError);
      throw new Error(sendError.message);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enquiry API error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
