import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await req.json();
    const { name, email, phone, company, product, subject, message } = body;

    const data = await resend.emails.send({
      from: "Kemplast Website <onboarding@resend.dev>",
      to: ["sales@kemplast.in"],
      replyTo: email,
      subject: `New Enquiry / Quote Request: ${subject}`,
      html: `
        <h2>New Enquiry / Quote Request from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        <p><strong>Subject:</strong> ${subject}</p>
        ${product && product.length ? `<p><strong>Products of Interest:</strong> ${product.join(", ")}</p>` : ""}
        <hr />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
