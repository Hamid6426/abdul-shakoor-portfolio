import React from "react";

export default function Connect() {
  return (
    <main className="w-full bg-blue-400 text-white py-12 text-center">
      <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
      <p className="text-lg mt-4 leading-relaxed text-wrap">
        Interested in research, collaboration, or academic guidance? Get in
        Touch
      </p>
      <a
        href="/contact"
        className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg  transition duration-300"
      >
        Get in Touch
      </a>
    </main>
  );
}
