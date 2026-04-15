import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, position, message, resumeBase64, resumeFileName } = body;

        if (!process.env.RESEND_API_KEY) {
            throw new Error("Email service is not configured.");
        }

        // Build email attachments array
        const attachments: { filename: string; content: Buffer }[] = [];
        if (resumeBase64 && resumeFileName) {
            attachments.push({
                filename: resumeFileName,
                content: Buffer.from(resumeBase64, "base64"),
            });
        }

        // Save to database first so we never lose a submission
        const { error: dbError } = await getSupabaseAdmin()
            .from("applications")
            .insert([{
                name,
                email,
                phone,
                position,
                message: message || null,
                resume_file_name: resumeFileName || null,
            }]);
        if (dbError) console.error("DB insert failed:", dbError.message);

        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
            from: "Kemplast Careers <noreply@kemplast.in>",
            to: ["sales@kemplast.in", "gpejavar@gmail.com", "chaitanya@kemplast.in"],
            replyTo: email,
            subject: `New Job Application: ${name} - ${position}`,
            attachments,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #f97316, #ea580c); padding: 24px; border-radius: 12px 12px 0 0;">
                        <h2 style="color: white; margin: 0;">📋 New Job Application Received</h2>
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
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                                <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #f97316;">${phone}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Position:</td>
                                <td style="padding: 8px 0; color: #1f2937;">${position}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Resume:</td>
                                <td style="padding: 8px 0; color: #1f2937;">${resumeFileName ? `✅ Attached (${resumeFileName})` : "❌ Not provided"}</td>
                            </tr>
                        </table>
                        ${message ? `
                            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
                            <p style="font-weight: bold; color: #374151; margin-bottom: 8px;">Message:</p>
                            <p style="color: #1f2937; white-space: pre-wrap; background: #f9fafb; padding: 12px; border-radius: 8px;">${message}</p>
                        ` : ""}
                        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
                        <p style="font-size: 12px; color: #9ca3af;">This application was submitted from the Kemplast website.</p>
                    </div>
                </div>
            `,
        });

        return NextResponse.json({ success: true, message: "Application submitted successfully" });
    } catch (error) {
        console.error("Error processing application:", error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 },
        );
    }
}
