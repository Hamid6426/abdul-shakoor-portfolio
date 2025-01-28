import type { NextApiRequest, NextApiResponse } from 'next';
import * as adminServices from '../../../services/adminServices';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.query;

  if (req.method === 'GET') {
    try {
      const admin = await adminServices.getAdminByEmail(email as string);

      if (!admin) {
        return res.status(404).json({
          success: false,
          message: 'Admin not found.',
        });
      }

      return res.status(200).json({
        success: true,
        data: admin,
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
