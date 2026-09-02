export const onRequestPost: PagesFunction = async ({ request, env }) => {
  try {
    const { query } = await request.json();
    const token = (env as { GITHUB_TOKEN?: string }).GITHUB_TOKEN || "";

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
    if (
      (data?.errors || []).some((e: { type?: string }) => e.type === "RATE_LIMITED")
    ) {
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