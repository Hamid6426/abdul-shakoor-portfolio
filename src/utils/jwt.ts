import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "abcdefgh12345678abcdefgh12345678"; // Replace with your environment secret key

// Generate JWT token
export const generateToken = (id: string): string => {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: "1h" }); // Token expires in 1 hour
};

// Verify JWT token
export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};
