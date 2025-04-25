"use client";

import React, { useState } from "react";

const FAQ_DATA = [
  {
    question: "What is the AI Scheduling Assistant?",
    answer:
      "The AI Scheduling Assistant helps you manage your calendar and tasks with smart automation, reminders, and seamless integrations.",
  },
  {
    question: "How secure is my data with the AI Scheduling Assistant?",
    answer:
      "We take your privacy and security seriously. Our AI Scheduling Assistant uses advanced encryption and security protocols to ensure your data is protected at all times.",
  },
  {
    question: "How does the AI Scheduling Assistant work?",
    answer:
      "It analyzes your schedule, preferences, and priorities to suggest the best times for meetings, tasks, and reminders.",
  },
  {
    question: "Is the AI Scheduling Assistant compatible with my calendar?",
    answer:
      "Yes, our AI Scheduling Assistant seamlessly integrates with Google Calendar, Outlook, and Apple Calendar, ensuring your schedules are always in sync.",
  },
  {
    question: "Can I customize notifications and reminders?",
    answer:
      "Absolutely! You can personalize all notifications and reminders to fit your workflow.",
  },
  {
    question: "Can the AI Scheduling Assistant manage tasks as well?",
    answer:
      "Yes, it can help you organize, prioritize, and track your tasks alongside your events.",
  },
  {
    question: "How do I start with AI Scheduling?",
    answer:
      "Simply sign up, connect your calendar, and let the assistant guide you through the setup process.",
  },
  {
    question: "What are the pricing plans for the AI Scheduling Assistant?",
    answer:
      "We offer flexible plans for individuals, teams, and enterprises. Visit our pricing page for more details.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="w-full min-h-[100vh] relative py-20 flex justify-center items-center overflow-hidden">
      {/* Grid Pattern Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(160,132,232,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(160,132,232,0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Main Content */}
      <div className="relative w-full max-w-5xl bg-[#18112b] rounded-2xl shadow-2xl border border-[#3a2769] px-6 md:px-16 py-12 z-10 overflow-hidden">
        {/* Tag */}
        <div className="flex justify-center mb-4">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#3a2769]/70 text-[#e6d8ff] tracking-wide flex items-center gap-2">
            <svg width="16" height="16" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#a084e8"/></svg>
            FAQ
          </span>
        </div>
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#f7f3ff] mb-2">Frequently Asked Question</h2>
        <p className="text-center text-[#bca7e7] text-base mb-10">Find quick answers to common questions about our AI Scheduling Assistant.</p>
        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {FAQ_DATA.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-xl border border-[#3a2769] bg-[#221447] transition-all duration-200 ${openIndex === idx ? "shadow-xl border-[#a084e8]" : ""}`}
            >
              <button
                className="flex items-center justify-between w-full px-6 py-5 text-left text-[#f7f3ff] text-lg font-semibold focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{item.question}</span>
                <span className="ml-4 text-2xl text-[#bca7e7]">{openIndex === idx ? "−" : "+"}</span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5 text-[#e6d8ff] text-base animate-fade-in">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Decorative Stars (optional, for extra polish) */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <svg className="absolute top-6 left-10 opacity-30" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2" fill="#a084e8"/></svg>
          <svg className="absolute bottom-10 right-12 opacity-20" width="18" height="18" fill="none" viewBox="0 0 18 18"><circle cx="9" cy="9" r="1.5" fill="#a084e8"/></svg>
        </div>
      </div>
    </section>
  );
}
