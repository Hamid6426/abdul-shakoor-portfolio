export default function Experience() {
  return (
    <>
      <h2 className="text-2xl font-bold m t-8 mb-4 text-gray-800">
        Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Professor at UET Peshawar
          </h3>
          <p className="text-gray-700">
            Dr. Shakoor has been a professor for over 10 years, imparting
            knowledge in Mechanical Engineering and guiding numerous students.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Lead Researcher at XYZ Lab
          </h3>
          <p className="text-gray-700">
            Led cutting-edge research in sustainable energy systems,
            contributing to publications in leading journals and conferences.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Consultant for ABC Company
          </h3>
          <p className="text-gray-700">
            Provided expert consulting services in mechanical systems,
            optimizing HVAC and CAD processes for leading engineering firms.
          </p>
        </div>
      </div>
    </>
  );
}
