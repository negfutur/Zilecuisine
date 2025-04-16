import { PassThrough } from "node:stream";
import { RemixServer } from "@remix-run/react";
import { renderToPipeableStream } from "react-dom/server";

export default function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  return new Promise((resolve, reject) => {
    const stream = new PassThrough();
    const { pipe } = renderToPipeableStream(
      <RemixServer context={remixContext} url={request.url} />,
      {
        onShellReady() {
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              status: responseStatusCode,
              headers: responseHeaders
            })
          );
        },
        onShellError(err) {
          reject(err);
        },
        onError(err) {
          console.error(err);
        }
      }
    );
    pipe(stream);
  });
}