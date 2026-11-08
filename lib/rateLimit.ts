const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const requests = new Map<string, number[]>();

/**
 * A basic in-memory limit: 5 messages per IP every 10 minutes. It applies per server instance and
 * resets on cold starts, so it stops casual abuse rather than a determined attacker.
 */
export function isRateLimited(ip: string, now = Date.now()) {
  for (const [key, times] of requests) {
    if (times.every((time) => now - time >= WINDOW_MS)) requests.delete(key);
  }

  const recent = (requests.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    requests.set(ip, recent);
    return true;
  }

  recent.push(now);
  requests.set(ip, recent);
  return false;
}
