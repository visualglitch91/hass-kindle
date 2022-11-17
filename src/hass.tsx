import { token, server } from "./config.json";
import request from "./request";

export default function hass<T = any>(
  method: "get" | "post",
  path: string,
  body?: any
) {
  return request<T>(`${server}/api/${path}`, {
    method,
    headers: { Authorization: `Bearer ${token}` },
    body,
  });
}
