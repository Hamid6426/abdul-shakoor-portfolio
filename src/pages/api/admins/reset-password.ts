import type { NextApiRequest, NextApiResponse } from 'next';
import * as adminServices from '../../../services/adminServices';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email, token, expiresAt } = req.body;

      const updatedAdmin = await adminServices.setPasswordResetToken(email, token, expiresAt);

      if (!updatedAdmin) {
        return res.status(404).json({
          success: false,
          message: 'Admin not found.',
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Password reset token set successfully!',
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
