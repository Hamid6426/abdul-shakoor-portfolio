import type { NextApiRequest, NextApiResponse } from 'next';
import * as adminServices from '../../../../services/adminServices';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    try {
      const updatedAdmin = await adminServices.updateAdmin(id as string, req.body);

      if (!updatedAdmin) {
        return res.status(404).json({
          success: false,
          message: 'Admin not found.',
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Admin updated successfully!',
        data: updatedAdmin,
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
