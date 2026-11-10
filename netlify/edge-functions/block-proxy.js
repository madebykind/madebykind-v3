export default async (request) => {
  const cfWorker = request.headers.get("cf-worker");
  if (cfWorker) console.log("cf-worker:", cfWorker, request.url);
};

export const config = {
  path: "/*",
  excludedPath: ["/*.css", "/*.js", "/*.svg", "/*.woff2"],
};