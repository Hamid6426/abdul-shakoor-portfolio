import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import useFetchMails from "../../hooks/useFetchMails";
import MailCard from "../../components/cards/MailCard";
import MailDeleteButton from "../../components/buttons/MailDeleteButton";

const AdminManageMailsPage = () => {
  const { mails, loading, error } = useFetchMails();

  const handleReload = () => {
    window.location.reload();
  };

  if (loading) return <AdminLayout>Loading...</AdminLayout>;
  if (error) return <AdminLayout>Error: {error.message}</AdminLayout>;

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Manage Mails</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mails.map((mail) => (
            <div key={mail._id} className="relative">
              <MailCard
                firstName={mail.firstName}
                lastName={mail.lastName}
                email={mail.email}
                subject={mail.subject}
                message={mail.message}
              />
              <MailDeleteButton
                mailId={mail._id}
                onDeleteSuccess={handleReload}
              />
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminManageMailsPage;
