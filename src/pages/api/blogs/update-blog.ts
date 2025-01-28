import type { NextApiRequest, NextApiResponse } from "next";
import * as blogServices from "src/services/blogServices";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  // Ensure the method is PUT
  if (req.method !== "PUT") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed. Use PUT to update.",
    });
  }

  // Validate the ID parameter
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "Blog ID is required.",
    });
  }

  try {
    // Call the service to update the blog
    const updatedBlog = await blogServices.updateBlog(id as string, req.body);

    if (!updatedBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Blog post updated successfully!",
      data: updatedBlog,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
}
