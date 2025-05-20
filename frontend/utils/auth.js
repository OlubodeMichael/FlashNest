export const isTokenExpired = (token) => {
  try {
    const payloadBase64 = token.split(".")[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));
    const currentTime = Math.floor(Date.now() / 1000);
    return decodedPayload.exp < currentTime;
  } catch (err) {
    console.error("Failed to decode JWT:", err);
    return true;
  }
};
