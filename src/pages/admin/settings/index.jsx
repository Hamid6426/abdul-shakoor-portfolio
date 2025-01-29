import PatchFullName from "./components/PatchFullName";
import PatchEmail from "./components/PatchEmail";
import PatchPassword from "./components/PatchPassword";
import AdminNavbar from "@/components/navigation/AdminNavbar";

export default function AdminSettingsPage() {
  return (
    <>
      <AdminNavbar />
      <div className="py-8 w-full">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-4 ">Account Settings</h1>
          <div className="flex flex-col justify-center items-center gap-8">
            <PatchFullName />
            <PatchEmail />
            <PatchPassword />
          </div>
        </div>
      </div>
    </>
  );
}
