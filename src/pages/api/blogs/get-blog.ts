import type { NextApiRequest, NextApiResponse } from "next";
import * as blogServices from "src/services/blogServices";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  if (req.method === "GET") {
    try {
      const blogPost = await blogServices.getBlogById(id as string);

      if (!blogPost) {
        return res.status(404).json({
          success: false,
          message: "Blog post not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: blogPost,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error.",
      });
    }
  }
}
