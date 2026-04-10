export async function onRequest(context) {
  const { request, env } = context;
  const body = await request.json();
  const db = env.DB;
  
  if (body.action === "register") {
    const salt = crypto.randomUUID();
    const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(body.password + salt));
    const hashHex = [...new Uint8Array(hash)].map(b => b.toString(16).padStart(2, '0')).join('');
    await db.prepare("INSERT INTO users (username, password_hash, salt) VALUES (?, ?, ?)").bind(body.username, hashHex, salt).run();
    return new Response(JSON.stringify({ status: "ok" }));
  }
}