export default function Education() {
  return (
    <>
      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Ph.D. in Mechanical Engineering
          </h3>
          <p className="text-gray-700">
            Awarded by ABC University, focusing on renewable energy systems and
            thermal engineering.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            M.S. in Mechanical Engineering
          </h3>
          <p className="text-gray-700">
            Completed at XYZ University, with a specialization in CAD modeling
            and HVAC systems.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            B.S. in Mechanical Engineering
          </h3>
          <p className="text-gray-700">
            Earned from UET Peshawar, where Dr. Shakoor built the foundation for
            his academic and professional career.
          </p>
        </div>
      </div>
    </>
  );
}
