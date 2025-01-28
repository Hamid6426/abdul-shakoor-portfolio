import { NextApiRequest, NextApiResponse } from 'next';
import * as mailServices from 'src/services/mailServices';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Mail ID is required.',
      });
    }
    try {
      const deletedMail = await mailServices.deleteMail(id as string);
      res.status(200).json(deletedMail);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
