interface EventContext {
  request: Request;
}

export const onRequest = async (context: EventContext): Promise<Response> => {
  const url = new URL(context.request.url);
  const targetUrl = `https://watslog-bff.warmsynthsiloveyou.workers.dev${url.pathname}${url.search}`;

  // Forward request with original headers and method
  return fetch(new Request(targetUrl, context.request));
};
