// middleware/rateLimiter.js

const rateLimitStore = new Map(); // { key: { count, lastRequest } }

const RATE_LIMIT = 50; // requests
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

module.exports = function rateLimiter(req, res, next) {
  const key = req.user._id; // or use req.user.id if authenticated
  const now = Date.now();

  const entry = rateLimitStore.get(key) || { count: 0, lastRequest: now };

  // Reset window if it's expired
  if (now - entry.lastRequest > WINDOW_MS) {
    entry.count = 1;
    entry.lastRequest = now;
  } else {
    entry.count += 1;
  }

  // Update store
  rateLimitStore.set(key, entry);

  if (entry.count > RATE_LIMIT) {
    return res.status(429).json({
      status: "error",
      message: "Too many requests. Please try again later.",
    });
  }

  next();
};
