import type { NextApiRequest, NextApiResponse } from 'next';
import * as blogServices from 'src/services/blogServices';

// POST API to create a new blog post (admin only)
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, mainHeading, subHeadingOne, subHeadingTwo, paragraphOne, paragraphTwo, imageLink, imageCaption, published, author } = req.body;

    // Perform validation
    if (!title || !mainHeading || !paragraphOne || !paragraphTwo ) {
      return res.status(400).json({
        success: false,
        message: 'Required fields are missing: title, mainHeading, paragraphOne, paragraphTwo.',
      });
    }

    console.log(`These are optional fields: ${subHeadingOne}, ${subHeadingTwo}, ${imageLink}, ${imageCaption}, ${published}, ${author}`);

    try {
      const blogPost = await blogServices.createBlog(req.body);

      return res.status(201).json({
        success: true,
        message: 'Blog post created successfully!',
        data: blogPost,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error.',
      });
    }
  } else {
    return res.status(405).json({
      success: false,
      message: 'Method Not Allowed',
    });
  }
}
