import useFetchMails from "../../utils/useFetchMails";
import MailCard from "../../components/cards/MailCard";
import MailDeleteButton from "../../components/buttons/MailDeleteButton";

const AdminManageMailsPage = () => {
  const { mails } = useFetchMails();

  const handleReload = () => {
    window.location.reload();
  };

  return (
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
  );
};

export default AdminManageMailsPage;
