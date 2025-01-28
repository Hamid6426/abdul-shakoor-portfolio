import React from "react";

export default function cta() {
  return (
    <section className="py-16 bg-gray-900 text-white mb-6">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Connect with Dr. Shakoor</h2>
        <p className="text-lg leading-relaxed mb-6">
          Whether you're a student, researcher, or professional, feel free to
          reach out to Dr. Abdul Shakoor for academic guidance, collaboration
          opportunities, or seminars.
        </p>
        <a
          href="mailto:your-email@gmail.com"
          className="inline-block bg-[#0ff] text-gray-900 font-bold py-3 px-6 rounded-lg shadow hover:bg-[#0cc] hover:text-white transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
