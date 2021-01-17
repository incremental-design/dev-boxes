import dotenv from "dotenv";
dotenv.config(); // we have to initialize environment vars before we can actually access auth token

export default function (): string {
  const authToken = process.env.DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN;

  if (typeof authToken === "string") {
    return authToken;
  } else {
    throw new Error(
      "Digital Ocean Personal Access Token has not been set in `.env`. Cannot access digital ocean API"
    );
  }
}
