export const getBaseURL = () => {
  const environment = process.env.NODE_ENV;

  console.log("NODE_ENV:", environment); // Debug log

  const baseURL =
    environment === "development"
      ? "http://localhost:3000"
      : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

  return baseURL;
};

console.log(getBaseURL());
