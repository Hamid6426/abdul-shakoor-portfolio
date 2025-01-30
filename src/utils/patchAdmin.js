import axios from '@/utils/axiosConfig'; // Ensure axios is correctly configured

export const patchAdmin = async (id, updateData) => {
  try {
    if (!id || !updateData || Object.keys(updateData).length === 0) {
      throw new Error('Invalid data: Admin ID and update fields are required');
    }

    const response = await axios.patch(`/admins/${id}`, updateData);

    return response.data;
  } catch (error) {
    console.error('Error updating admin:', error);
    throw new Error(error.response?.data?.message || 'Failed to update admin');
  }
};

export const patchAdminPassword = async (id, currentPassword, newPassword) => {
  try {
    const response = await axios.patch(`/admins/${id}`, { currentPassword, newPassword });
    return response.data;
  } catch (error) {
    console.error('Error updating password:', error);
    throw new Error(error.response?.data?.message || 'Failed to update password');
  }
};