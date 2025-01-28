// src/types/next.d.ts
import { NextRequest } from "next/server";
import { NextApiRequest } from 'next';

interface CustomNextApiRequest extends NextApiRequest {
  user?: any; // You can define the user type more strictly based on your JWT payload
}

declare global {
  var mongoose: {
    conn: typeof import("mongoose") | null;
    promise: Promise<typeof import("mongoose")> | null;
  };
}

// Extending NextRequest to add a custom 'admin' property
declare module "next/server" {
  interface NextRequest {
    admin?: { id: string; email: string }; // Customize the properties you expect from the decoded JWT
  }
}

export {};
export type { CustomNextApiRequest };
