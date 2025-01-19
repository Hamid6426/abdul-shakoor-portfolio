const Admin = require('../models/Admin');

const createAdmin = async (adminData) => {
  const admin = new Admin(adminData);
  await admin.save();
  return admin;
};

const getAdminById = async (id) => {
  return await Admin.findById(id);
};

const updateAdmin = async (id, updateData) => {
  return await Admin.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteAdmin = async (id) => {
  return await Admin.findByIdAndDelete(id);
};

module.exports = {
  createAdmin,
  getAdminById,
  updateAdmin,
  deleteAdmin
};
