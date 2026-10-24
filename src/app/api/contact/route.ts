import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  throw new Error("Missing RESEND_API_KEY");
}

const resend = new Resend(resendApiKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";

    const email =
      typeof body.email === "string" ? body.email.trim() : "";

    const company =
      typeof body.company === "string" && body.company.trim()
        ? body.company.trim()
        : null;

    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, email and message are required.",
        },
        { status: 400 }
      );
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Save lead to Supabase
    const { data: lead, error: databaseError } = await supabaseAdmin
      .from("leads")
      .insert({
        name,
        email,
        company,
        message,
        status: "new",
      })
      .select("id, created_at")
      .single();

    if (databaseError) {
      console.error("Supabase error:", databaseError);

      return NextResponse.json(
        {
          success: false,
          error: "Unable to save your enquiry.",
        },
        { status: 500 }
      );
    }

    // Send email notification
    try {
      const { error: emailError } = await resend.emails.send({
        from:
          process.env.RESEND_FROM_EMAIL ||
          "InEarthLabs <onboarding@resend.dev>",

        to: [
          process.env.NOTIFICATION_EMAIL ||
            "inearthlabs@gmail.com",
        ],

        replyTo: email,

        subject: `New InEarthLabs Enquiry — ${
          company || name
        }`,

        html: `
          <div style="
            font-family: Arial, Helvetica, sans-serif;
            max-width: 620px;
            margin: 0 auto;
            background: #ffffff;
            color: #111111;
          ">

            <div style="
              background: #0a0a0a;
              padding: 28px;
              border-radius: 16px 16px 0 0;
            ">
              <h1 style="
                margin: 0;
                color: #ffffff;
                font-size: 24px;
              ">
                In<span style="color:#ef4444;">Earth</span>Labs
              </h1>

              <p style="
                color: #999999;
                margin: 8px 0 0;
                font-size: 14px;
              ">
                New website enquiry
              </p>
            </div>

            <div style="
              border: 1px solid #eeeeee;
              border-top: 0;
              padding: 28px;
              border-radius: 0 0 16px 16px;
            ">

              <p style="
                margin-top: 0;
                font-size: 16px;
              ">
                A new business enquiry has been submitted through
                the InEarthLabs website.
              </p>

              <hr style="
                border: 0;
                border-top: 1px solid #eeeeee;
                margin: 24px 0;
              " />

              <p>
                <strong>Name</strong><br />
                ${escapeHtml(name)}
              </p>

              <p>
                <strong>Business email</strong><br />
                ${escapeHtml(email)}
              </p>

              <p>
                <strong>Company / Business</strong><br />
                ${escapeHtml(company || "Not provided")}
              </p>

              <p>
                <strong>What would they like to automate?</strong>
              </p>

              <div style="
                background: #f7f7f7;
                border-left: 3px solid #ef4444;
                padding: 16px;
                border-radius: 6px;
                line-height: 1.6;
              ">
                ${escapeHtml(message)}
              </div>

              <hr style="
                border: 0;
                border-top: 1px solid #eeeeee;
                margin: 24px 0;
              " />

              <p style="
                color: #777777;
                font-size: 13px;
                margin-bottom: 0;
              ">
                Lead ID: ${lead.id}<br />
                Submitted: ${new Date(
                  lead.created_at
                ).toLocaleString("en-IN", {
                  timeZone: "Asia/Kolkata",
                })}
              </p>

            </div>
          </div>
        `,
      });

      if (emailError) {
        console.error(
          "Resend notification error:",
          emailError
        );
      }
    } catch (emailError) {
      console.error(
        "Email notification failed:",
        emailError
      );
    }

    return NextResponse.json(
      {
        success: true,
        id: lead.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while submitting the form.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}