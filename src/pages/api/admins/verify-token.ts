// /pages/api/verify-token.ts
import { NextApiRequest, NextApiResponse } from "next";
import verifyToken from "src/utils/verifyToken"; // Import your utility function

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.headers.authorization?.split(" ")[1]; // Get the token from Authorization header

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Token is required" });
  }

  try {
    // Use the verifyToken utility to verify and decode the token
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      console.error("JWT_SECRET is not set in the environment variables!");
      return res
        .status(500)
        .json({ success: false, message: "Server misconfiguration" });
    }

    const decoded = verifyToken(
      token,
      jwtSecret
    );

    // If token is valid, send back the decoded admin ID
    res.status(200).json({ success: true, adminId: decoded.id });
  } catch (error) {
    res
      .status(403)
      .json({ success: false, message: "Invalid or expired token" });
  }
}
