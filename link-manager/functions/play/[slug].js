export async function onRequest(context) {
  const { slug } = context.params;
  const db = context.env.DB;
  await db.prepare("UPDATE links SET view_count = view_count + 1 WHERE slug = ?").bind(slug).run();
  const link = await db.prepare("SELECT * FROM links WHERE slug = ?").bind(slug).first();
  return new Response(`<html><body><h1>Playing: ${slug}</h1><p>Views: ${link.view_count}</p></body></html>`, {
    headers: { "content-type": "text/html" }
  });
}