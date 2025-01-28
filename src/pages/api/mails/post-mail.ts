// src/pages/api/mails/post-mail.ts
import { NextApiRequest, NextApiResponse } from 'next';
import * as mailServices from 'src/services/mailServices';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email, subject, message } = req.body;

      if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const mail = await mailServices.createMail({ firstName, lastName, email, subject, message });
      res.status(201).json(mail);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}