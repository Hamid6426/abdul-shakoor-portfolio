import type { NextApiRequest, NextApiResponse } from "next";
import * as blogServices from "src/services/blogServices";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  if (req.method === "DELETE") {
    try {
      const deletedBlog = await blogServices.deleteBlog(id as string);

      if (!deletedBlog) {
        return res.status(404).json({
          success: false,
          message: "Blog post not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Blog post deleted successfully.",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error.",
      });
    }
  } else {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }
}
