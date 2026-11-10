export default async (request) => {
  const cfWorker = request.headers.get("cf-worker");
  if (cfWorker && cfWorker !== "madebykind.com") {
    return new Response("Forbidden", { status: 403 });
  }
};

export const config = {
  path: "/*",
  excludedPath: ["/*.css", "/*.js", "/*.svg", "/*.woff2"],
};