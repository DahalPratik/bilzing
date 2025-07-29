"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What types of websites can I build with Bilzing?",
    answer:
      "You can build any type of website including ecommerce stores, landing pages, portfolios, business websites, blogs, and more. Our platform is flexible enough to handle any project.",
  },
  {
    question: "Do I need coding experience to use Bilzing?",
    answer:
      "Not at all! Bilzing is designed for users with no coding experience. Our drag-and-drop interface and pre-built templates make it easy for anyone to create professional websites.",
  },
  {
    question: "Can I use my own domain name?",
    answer:
      "Yes, you can connect your own custom domain to any website you build with Bilzing. We also provide free subdomains for all users.",
  },
  {
    question: "Is there a free plan available?",
    answer:
      "Yes, we offer a free plan that includes basic features and hosting. You can upgrade to our paid plans for more advanced features and better performance.",
  },
  {
    question: "How fast will my website load?",
    answer:
      "All websites built with Bilzing are optimized for speed. We use global CDN, optimized images, and modern web technologies to ensure your site loads quickly worldwide.",
  },
  {
    question: "Can I export my website?",
    answer:
      "Yes, with our Pro and Enterprise plans, you can export your website code and host it anywhere you want. You&apos;re never locked into our platform.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Bilzing
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="text-blue-600 font-semibold hover:text-blue-700">
            Contact our support team →
          </button>
        </div>
      </div>
    </section>
  );
}
