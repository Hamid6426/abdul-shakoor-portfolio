import { NextApiRequest, NextApiResponse } from 'next';
import * as adminServices from 'src/services/adminServices';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { id } = req.query;
      const admin = await adminServices.getAdminById(id as string);
      if (!admin) {
        return res.status(404).json({ success: false, message: 'Admin not found.' });
      }
      return res.status(200).json(admin);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Internal Server Error.' });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method Not Allowed.' });
  }
}
