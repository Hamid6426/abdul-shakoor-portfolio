import type { NextApiRequest, NextApiResponse } from 'next';
import * as adminServices from '../../../services/adminServices';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email, token } = req.body;

      const admin = await adminServices.verifyPasswordResetToken(email, token);

      if (!admin) {
        return res.status(404).json({
          success: false,
          message: 'Invalid or expired reset token.',
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Token is valid.',
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
