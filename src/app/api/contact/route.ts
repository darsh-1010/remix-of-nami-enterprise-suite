import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas";
import { ZodError } from "zod";

// Rate limiter in-memory (for production, use Redis)
const RATE_LIMIT_MAP = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per minute

function getRateLimitKey(request: NextRequest): string {
  return request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const requests = RATE_LIMIT_MAP.get(key) || [];
  const recentRequests = requests.filter((time) => now - time < RATE_LIMIT_WINDOW);

  if (recentRequests.length >= RATE_LIMIT_MAX) {
    return false;
  }

  recentRequests.push(now);
  RATE_LIMIT_MAP.set(key, recentRequests);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Check rate limit
    const rateLimitKey = getRateLimitKey(request);
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // TODO: Send email using your email service (Resend, SendGrid, etc.)
    // const response = await sendEmail({
    //   to: "contact@namigroup.com",
    //   from: validatedData.email,
    //   subject: `New inquiry from ${validatedData.name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${validatedData.name}</p>
    //     <p><strong>Email:</strong> ${validatedData.email}</p>
    //     <p><strong>Organization:</strong> ${validatedData.org || "Not provided"}</p>
    //     <p><strong>Phone:</strong> ${validatedData.phone || "Not provided"}</p>
    //     <p><strong>Interest:</strong> ${validatedData.interest}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${validatedData.message}</p>
    //   `,
    // });

    // For now, just log the submission
    console.log("[Contact Form] New submission:", validatedData);

    return NextResponse.json({
      success: true,
      message: "Thank you for your inquiry. We'll be in touch shortly.",
    });
  } catch (error) {
    console.error("[Contact Form] Error:", error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid form data",
          errors: error.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
