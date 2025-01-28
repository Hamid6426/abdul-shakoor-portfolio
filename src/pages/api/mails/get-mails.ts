import { NextApiRequest, NextApiResponse } from 'next';
import * as mailServices from 'src/services/mailServices';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const mails = await mailServices.getAllMails();
      return res.status(200).json(mails);
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  } else {
    // Method not allowed for other HTTP methods
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
