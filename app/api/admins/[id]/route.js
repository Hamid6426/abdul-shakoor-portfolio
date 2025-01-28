import {
  getAdminById,
  getAdminByIdAndUpdate,
  getAdminByIdAndDelete
} from "../../../lib/services/adminService";

export async function GET(_request, context) {
  const { params } = context; // Extracting the params object from request
  const { id } = params; // Extracting the ID from the URL params

  try {
    const admin = await getAdminById(id);
    if (admin) {
      Response.status(200).json(admin);
    } else {
      Response.status(404).json({ error: "Admin not found" });
    }
  } catch (error) {
    Response.status(500).json({ error: "Error retrieving admin" });
  }
}

export async function PUT() {
  const { params } = context; // Extract parameters from context
  const id = params.id; // Extract the ID from the URL path

  try {
    const adminData = Request.body;
    const updatedAdmin = await getAdminByIdAndUpdate(id, adminData);
    Response.status(200).json(updatedAdmin);
  } catch (error) {
    Response.status(500).json({ error: "Error updating admin" });
  }
}

export async function DELETE() {
  const { params } = context; // Extracting the params object from request
  const { id } = params; // Extracting the ID from the URL params
  
  try {
    await getAdminByIdAndDelete(id);
    return Response.json({}, { status: 204 });
  } catch (error) {
    return Response.json({ error: "Error deleting admin" }, { status: 500 });
  }
}
