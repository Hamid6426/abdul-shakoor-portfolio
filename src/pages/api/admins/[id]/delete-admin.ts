import type { NextApiRequest, NextApiResponse } from 'next';
import * as adminServices from '../../../../services/adminServices';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      const deletedAdmin = await adminServices.deleteAdmin(id as string);

      if (!deletedAdmin) {
        return res.status(404).json({
          success: false,
          message: 'Admin not found.',
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Admin deleted successfully.',
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
