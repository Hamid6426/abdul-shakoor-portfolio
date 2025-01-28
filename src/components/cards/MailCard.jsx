// root/app/components/cards/MailCard.jsx

const MailCard = ({ firstName, lastName, email, subject, message }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white border border-gray-200">
      <div className="px-6 py-4">
        <div className="font-bold text-lg text-gray-900 mb-2">{subject}</div>
        <p className="text-gray-700 text-sm mb-4">{message}</p>
        <div className="text-sm text-gray-500">
          <p>
            <span className="font-semibold">From:</span> {firstName} {lastName}
            <br />
            <span className="font-semibold">Email:</span> {email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MailCard;
