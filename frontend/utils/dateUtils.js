/**
 * Formats a date string or Date object into a human-readable format
 * @param {string|Date} date - The date to format
 * @returns {string} A formatted date string
 */
export function formatDate(date) {
  if (!date) return "Unknown date";

  const dateObj = typeof date === "string" ? new Date(date) : date;

  // Check if date is valid
  if (isNaN(dateObj.getTime())) {
    return "Invalid date";
  }

  const now = new Date();
  const diffInSeconds = Math.floor((now - dateObj) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  // Format based on how long ago the date was
  if (diffInSeconds < 60) {
    return "just now";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes !== 1 ? "s" : ""} ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours !== 1 ? "s" : ""} ago`;
  } else if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays !== 1 ? "s" : ""} ago`;
  } else {
    // For older dates, use a more detailed format
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };

    return dateObj.toLocaleDateString(undefined, options);
  }
}

/**
 * Formats a date range from start to end date
 * @param {string|Date} startDate - The start date
 * @param {string|Date} endDate - The end date
 * @returns {string} A formatted date range string
 */
export function formatDateRange(startDate, endDate) {
  if (!startDate || !endDate) return "Invalid date range";

  const start = typeof startDate === "string" ? new Date(startDate) : startDate;
  const end = typeof endDate === "string" ? new Date(endDate) : endDate;

  // Check if dates are valid
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return "Invalid date range";
  }

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return `${start.toLocaleDateString(
    undefined,
    options
  )} - ${end.toLocaleDateString(undefined, options)}`;
}

/**
 * Returns a formatted time string (HH:MM AM/PM)
 * @param {string|Date} date - The date to format
 * @returns {string} A formatted time string
 */
export function formatTime(date) {
  if (!date) return "";

  const dateObj = typeof date === "string" ? new Date(date) : date;

  // Check if date is valid
  if (isNaN(dateObj.getTime())) {
    return "";
  }

  return dateObj.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}
