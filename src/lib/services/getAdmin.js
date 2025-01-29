// services/getAdmin.js
import axios from '@/utils/axiosConfig';

export async function getAdmin(id) {
  try {
    const response = await axios.get(`/admins/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching admin data');
  }
}
