import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "tonykanyamuka@gmail.com",
      subject: "New Contact Form Submission From Your PORTFOLIO Website",
      html: `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
  <div style="text-align: center; border-bottom: 2px solid #2563eb; padding-bottom: 15px; margin-bottom: 25px;">
    <h1 style="color: #1e293b; font-size: 24px; margin: 0;">
      ${process.env.NEXT_PUBLIC_SITE_NAME || "Your Portfolio"} Contact Form
    </h1>
    <p style="color: #64748b; font-size: 16px; margin: 5px 0 0;">
      New Message Received
    </p>
  </div>

  <div style="background-color: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h2 style="color: #1e293b; font-size: 20px; margin-bottom: 20px;">
      Client Information
    </h2>

    <div style="margin-bottom: 15px;">
      <p style="color: #475569; margin: 8px 0;">
        <strong style="color: #1e293b; min-width: 120px; display: inline-block;">Name:</strong>
        ${body.firstName} ${body.lastName}
      </p>
      <p style="color: #475569; margin: 8px 0;">
        <strong style="color: #1e293b; min-width: 120px; display: inline-block;">Email:</strong>
        <a href="mailto:${body.email}" style="color: #2563eb; text-decoration: none;">
          ${body.email}
        </a>
      </p>
      <p style="color: #475569; margin: 8px 0;">
        <strong style="color: #1e293b; min-width: 120px; display: inline-block;">Phone:</strong>
        <a href="tel:${body.phone}" style="color: #2563eb; text-decoration: none;">
          ${body.phone}
        </a>
      </p>
      <p style="color: #475569; margin: 8px 0;">
        <strong style="color: #1e293b; min-width: 120px; display: inline-block;">Service Needed:</strong>
        <span style="background-color: #e2e8f0; padding: 4px 8px; border-radius: 4px;">
          ${body.service}
        </span>
      </p>
    </div>

    <h3 style="color: #1e293b; font-size: 18px; margin: 25px 0 15px;">
      Message Content
    </h3>
    <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0;">
      <p style="color: #475569; margin: 0; line-height: 1.6;">
        ${body.message}
      </p>
    </div>
  </div>

  <div style="text-align: center; margin-top: 25px; padding-top: 15px; color: #64748b; font-size: 12px;">
    <p style="margin: 5px 0;">
      Sent from your portfolio website: 
      <a href="${process.env.NEXT_PUBLIC_SITE_URL}" 
         style="color: #2563eb; text-decoration: none;">
        ${process.env.NEXT_PUBLIC_SITE_URL}
      </a>
    </p>
    <p style="margin: 5px 0;">
      &copy; ${new Date().getFullYear()} ${"Tony"} ${" Kanyamuka"}. All rights reserved.
    </p>
    <p style="color: #94a3b8; font-size: 14px; margin: 8px 0 0;">
      ${new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })} at ${new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      })}
    </p>
  </div>
</div>
`,
      //   html: `
      //     <h1>New Contact Form Submission</h1>
      //     <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
      //     <p><strong>Client Email:</strong> ${body.email}</p>
      //     <p><strong>Client Phone:</strong> ${body.phone}</p>
      //     <p><strong>Service:</strong> ${body.service}</p>
      //     <p><strong>ClientMessage:</strong> ${body.message}</p>
      //   `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
