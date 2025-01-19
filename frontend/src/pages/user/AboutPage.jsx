import React from 'react';
import UserLayout from '../../layouts/UserLayout';

const AboutPage = () => {
  return (
    <UserLayout>
      <div className="my-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">About Dr. Abdul Shakoor</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Dr. Abdul Shakoor is a distinguished professor in the Mechanical Engineering Department at UET Peshawar. He has a passion for teaching and research in the field of mechanical engineering, with numerous publications and projects to his name.
        </p>
        
        {/* Experience Section */}
        <h2 className="text-2xl font-bold m t-8 mb-4 text-gray-800">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Professor at UET Peshawar</h3>
            <p className="text-gray-700">
              Dr. Shakoor has been a professor for over 10 years, imparting knowledge in Mechanical Engineering and guiding numerous students.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Lead Researcher at XYZ Lab</h3>
            <p className="text-gray-700">
              Led cutting-edge research in sustainable energy systems, contributing to publications in leading journals and conferences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultant for ABC Company</h3>
            <p className="text-gray-700">
              Provided expert consulting services in mechanical systems, optimizing HVAC and CAD processes for leading engineering firms.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ph.D. in Mechanical Engineering</h3>
            <p className="text-gray-700">
              Awarded by ABC University, focusing on renewable energy systems and thermal engineering.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">M.S. in Mechanical Engineering</h3>
            <p className="text-gray-700">
              Completed at XYZ University, with a specialization in CAD modeling and HVAC systems.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">B.S. in Mechanical Engineering</h3>
            <p className="text-gray-700">
              Earned from UET Peshawar, where Dr. Shakoor built the foundation for his academic and professional career.
            </p>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default AboutPage;
