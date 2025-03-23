import React, { useState } from "react";
import { publications } from "@/data/publication-data";
import ResearchPublicationSummary from "@/components/ResearchPublicationSummary";

const Publications = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPublications = publications.filter((publication) => {
    const query = searchQuery.toLowerCase();
    return (
      String(publication.title).toLowerCase().includes(query) ||
      String(publication.authors).toLowerCase().includes(query) ||
      String(publication.journal).toLowerCase().includes(query)
    );
  });

  return (
    <div className="mx-auto max-w-5xl p-6">
      <ResearchPublicationSummary />
      <h2 className="my-6 text-3xl font-bold text-blue-600 text-center">
        List of Publications
      </h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Publications..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-6">
        {filteredPublications.length > 0 ? (
          filteredPublications.map((publication) => (
            <div
              key={publication.id}
              className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-800">
                {publication.title}
              </h3>
              <p className="mt-2 text-gray-700">
                <strong>Authors:</strong> {publication.authors}
              </p>
              <p className="mt-1 text-gray-700">
                <strong>Journal:</strong> {publication.journal} (
                {publication.year})
              </p>
              <p className="mt-1 text-gray-700">
                <strong>Pages:</strong> {publication.pages} |{" "}
                <strong>Indexing:</strong> {publication.indexing}
              </p>
              <p className="mt-1 text-gray-700">
                <strong>Impact Factor:</strong> {publication.impactFactor}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No publications found.</p>
        )}
      </div>
    </div>
  );
};

export default Publications;
