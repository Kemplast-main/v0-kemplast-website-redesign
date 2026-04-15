import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await req.json();
    const { name, email, phone, company, product, subject, message } = body;

    await resend.emails.send({
      from: "Kemplast Website <noreply@kemplast.in>",
      to: ["sales@kemplast.in", "gpejavar@gmail.com", "chaitanya@kemplast.in"],
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

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
