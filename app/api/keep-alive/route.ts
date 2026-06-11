import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function GET() {
  try {
    const supabaseAdmin = getSupabaseAdmin();
    
    // We just need a lightweight query to keep the database active
    // Fetching 1 row from 'quotes' is enough
    const { data, error } = await supabaseAdmin
      .from("quotes")
      .select("id")
      .limit(1);

    if (error) {
      console.error("Keep-alive error:", error.message);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Database keep-alive ping successful" });
  } catch (error) {
    console.error("Keep-alive exception:", error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
