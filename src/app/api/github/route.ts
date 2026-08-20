import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { query } = await request.json();
    const token = process.env.GITHUB_TOKEN || "";

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers,
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    if ((data?.errors || []).some((e: { type?: string }) => e.type === "RATE_LIMITED")) {
      return NextResponse.json({ error: "GitHub API rate limit exceeded" }, { status: 429 });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error("GitHub API Proxy Error:", error);
    return NextResponse.json({ error: "Failed to fetch from GitHub" }, { status: 500 });
  }
}
