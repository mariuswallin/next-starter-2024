import type { HttpHandler } from "msw"
import { http, HttpResponse } from "msw"

export const handlers: HttpHandler[] = [
  http.get("https://external-api/api/test", () => {
    return HttpResponse.json({ data: "test" })
  }),
  http.get("/api/local", () => {
    return HttpResponse.json({ data: "test" })
  }),
]
