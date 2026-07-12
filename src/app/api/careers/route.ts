import { NextRequest, NextResponse } from "next/server";
import { careersFormSchema } from "@/lib/schemas";
import { ZodError } from "zod";

// Rate limiter
const RATE_LIMIT_MAP = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX = 3; // 3 requests per minute

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
        { status: 429 },
      );
    }

    // Parse FormData
    const formData = await request.formData();
    const resume = formData.get("resume");

    // Convert FormData to object for validation
    const body = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      position: formData.get("position"),
      experience: formData.get("experience"),
      coverLetter: formData.get("coverLetter"),
      resume: resume instanceof File ? resume : null,
    };

    // Validate
    const validatedData = careersFormSchema.parse(body);

    // TODO: Handle file upload and send email
    // For now, just log the submission
    console.log("[Careers Form] New application:", {
      fullName: validatedData.fullName,
      email: validatedData.email,
      position: validatedData.position,
      experience: validatedData.experience,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for your application! We'll review it and get back to you soon.",
    });
  } catch (error) {
    console.error("[Careers Form] Error:", error);

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
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your application.",
      },
      { status: 500 },
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
