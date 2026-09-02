export const onRequestPost: PagesFunction = async ({ request, env }) => {
  try {
    const { query } = await request.json();
    const token = (env as { GITHUB_TOKEN?: string }).GITHUB_TOKEN || "";

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      "User-Agent": "portfolio-v2-shivraj",
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers,
      body: JSON.stringify({ query }),
    });

    const text = await response.text();
    let data: { data?: unknown; errors?: { type?: string; message?: string }[] } | null = null;
    try {
      data = JSON.parse(text);
    } catch {
      return new Response(
        JSON.stringify({ error: `GitHub returned non-JSON response (HTTP ${response.status})` }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }
    if ((data?.errors || []).some((e) => e.type === "RATE_LIMITED")) {
      return new Response(JSON.stringify({ error: "GitHub API rate limit exceeded" }), {
        status: 429,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("GitHub API Proxy Error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch from GitHub" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};